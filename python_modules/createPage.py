import re
import os
import sys
import yaml

def dic2str(dic, unquoted=""):
    ret = "{"
    for key in dic:
        ret += " " + key + ": " + ("\"" if key!=unquoted else "") + dic[key] + ("\"" if key!=unquoted else "") + ","
    return ret[:-1] + " }"

def createPage(argv)
    # Validating input
    if (len(argv) != 2):
        print("\nInvalid number of arguments: Expected: 1, Recieved: " + str(len(argv)-1) + "\n")
        exit(1)

    argv[1] = str(argv[1]).lower()
    argv[1] = argv[1].split("/")
    name = argv[1][-1]
    argv[1].remove(name)
    subpath = "/".join(argv[1])
    if (len(subpath) > 0):
        subpath += "/" #le agrego una '/' al final para facilitarme la

    if (len(name) < 3 or len(name) > 20):
        print("\nPage name must be 3-20 characters long\n")
        exit(1)

    if not (re.fullmatch("[a-z]+[0-9]*", name)):
        print("\nPage name must be pure characters and may end with a number\n")
        exit(1)

    if (len(subpath) > 0 and not re.match("([a-z]+[0-9]*/)+", subpath)):
        print("\nPage subpaths must be pure characters and may end with a number\n")
        exit(1)

    #print("\nNativeScript MACANA Page Creator")

    # Checking if it is a valid project folder

    try:
        #print("\nChecking for necesary dependencies...", end="")
        if not (os.path.isdir("app")):
            raise NotADirectoryError("\nError! Couldn't find 'app' folder!\n")
        if not (os.path.isfile("app/app.routing.ts")):
            raise NotADirectoryError("\nError! Couldn't find 'app/app.routing.ts' file!\n")
        if not (os.path.isdir("app/pages")):
            raise NotADirectoryError("\nError! Couldn't find 'app/pages' folder!\n")
        if not (os.path.isfile("app/package.json")):
            raise NotADirectoryError("\nError!Couldn't find 'app/package.json' file!\n")
        #print("Done!\n")
    except NotADirectoryError as e:
        print(e)
        exit(1)
    except:
        print("Error!\nSomething happened while checking for local dependencies")
        print("Make sure you have enough priviliges!\n")
        exit(1)

    # Checking if the page folder already exists

    if (os.path.isdir("app/pages/" + name)):
        print("\nError! Page folder '" + name + "' already exists!\n")
        exit(1)
    else:
        nPaginas = int(os.popen("ls -l app/pages/**/*.component.ts | wc -l").read())

    # Checking if the page name is already registered

    try:
        # Parsear app.routing.ts en 3 secciones: imports, routes y navigatableComponents
        with open("app/app.routing.ts", 'r') as f:
            buffer = f.read()
        buffer = buffer.split("export const ")
        if (len(buffer) != 3):
            raise BaseException("Found more or less than the expected 3 sectios")
        for i in range(0, len(buffer)):
            buffer[i] = buffer[i].strip() # strip = trim
        
        #la primera seccion
        imports = []
        for line in buffer[0].split("\n"):
            #el r"" para ke no me eskape el \2 y me lo tome como group backreference
            result = re.match(r"import[ \t]*{[ \t]*(.*)Component[ \t]*}[ \t]*from[ \t]*\"\./pages/(.*/)?([a-z]+[0-9]*)/\3\.component\";", line.strip())
            if not (result):
                raise BaseException("First section general pattern did not match")
            #Me aseguro de ke no haya nada raro en el nombre del componente importado
            if (result.group(1).lower() != result.group(3) or not re.fullmatch("[A-Z][A-Za-z]+[0-9]*", result.group(1))):
                raise BaseException("First section folder is not lowercase of component, or name is invalid")
            for elem in imports:
                if (elem[0] == result.group(1)):
                    raise BaseException("You seem to have a repeated page!")
                if (elem[0].lower() == result.group(1).lower()):
                    print("\nWarning! Your there are routes which when converted to lower case have the same name!\n")
            imports.append([result.group(1) + "Component", result.group(2)])

        #la segunda seccion
        result = re.match("routes[ \t]*=[ \t]*(\[.*\]);", buffer[1], re.DOTALL) #re.DOTALL flag => .* matches newline also
        if not (result):
            raise BaseException("Second section general pattern did not match")
        routes = (yaml.load(result.group(1).replace("\t", " "))) #YAML is a bitch and doesnt like tabs
        #look out for the start page
        
        #la tercera, primera linea 'navigatableComponents = [' y la ultima '];' pero tengo ke admitir variaciones, asike mejor json o algo asi
        result = re.match("navigatableComponents[ \t]*=[ \t]*(\[.*\]);", buffer[2], re.DOTALL)
        if not (result):
            raise BaseException("Third section general pattern did not match")
        components = yaml.load(result.group(1).replace("\t", " "))

        #ademas controlar ke el numero de entries en cada uno sea el mismo, e igual a la cantidad de carpetas en pages/
        if (len(list(filter(lambda e : "component" in e, routes))) != len(components) or len(components) != nPaginas):
            raise BaseException("The numbers of folders and declared pages is not the same!")

        #check if components correspond with imports and routes
        sort_comp = list(components)
        sort_impo = list(map(lambda e : e[0], imports))
        sort_comp.sort()
        sort_impo.sort()
        if (sort_comp != sort_impo):
            raise BaseException("The imports and components do not match")
        for e in components:
            found = False
            for d in list(filter(lambda e : "component" in e, routes)):
                if (d["component"] == e):
                    found = True
                    break
            if not found:
                raise BaseException("One or more components weren't found on the routes array")

    except BaseException as e:
        print("\nYour current app's format doesn't seem to correspond with the MACANA Angular standard")
        print("It's not safe to proceed: " + str(e) + "\n")
        exit(2)

    if (name in list(map(lambda e : e.lower()[0:len(e)-len("component")], components))):
        print("\nError! A page with that name already exists\n")
        exit(1)

    try:
        with open("app/app.routing.ts", 'r') as f:
            backup = f.read()
        with open("app/app.routing.ts.bk", 'w') as f:
            f.write(backup)
        os.chmod("app/app.routing.ts.bk", 0o750)

        indepRoutes = list(filter(lambda e : "component" not in e, routes))
        routes = list(filter(lambda e : "component" in e, routes))
        with open("app/app.routing.ts", 'w') as f:
            for e in imports:
                f.write("import { " + e[0] + " } from \"./pages/" + ("" if e[1]==None else e[1]) + e[0].lower()[0:len(e[0])-len("component")] + "/" + e[0].lower()[0:len(e[0])-len("component")] + ".component\";\n")
            f.write("import { " + name.capitalize() + "Component } from \"./pages/" + subpath + name + "/" + name + ".component\";\n\n")
            f.write("export const routes = [\n")
            for d in indepRoutes:
                f.write("\t" + dic2str(d) + ",\n")
            for d in routes:
                f.write("\t" + dic2str(d, "component") + ",\n")            
            f.write("\t{ path: \"" + name + "\", component: " + name.capitalize() + "Component }\n" )
            f.write("];\n\n")
            f.write("export const navigatableComponents = [\n")
            for e in components:
                f.write("\t" + e + ",\n")
            f.write("\t" + name.capitalize() + "Component\n")
            f.write("];\n")
        os.chmod("app/app.routing.ts", 0o750)
        os.makedirs("app/pages/" + subpath + name)

        with open("app/pages/" + subpath + name + "/" + name + ".component.ts", 'w') as f:
            f.write('''import { Component, OnInit} from "@angular/core";
import { BaseService } from "~/services/base.service";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "app-''' + name + "\",\n\ttemplateUrl: \"pages/" + subpath + name + "/" + name + ".component.html\",\n\tstyleUrls: [\"pages/" + subpath + name+ "/" + name + ".component.css\"],\n\tproviders: [BaseService]\n})" + """
export class """ + name.capitalize() + """Component implements OnInit {

    constructor(private app: BaseService, private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
	}
}
""")
        with open("app/pages/" + subpath + name + "/" + name + ".component.html", 'w') as f:
            pass
        with open("app/pages/" + subpath + name + "/" + name + ".component.css", 'w') as f:
            pass

        os.remove("app/app.routing.ts.bk")
    except BaseException as e: #restore backup if posible and ask for priviliges
        with open("app/app.routing.ts.bk", 'r') as f:
            backup = f.read()
        with open("app/app.routing.ts", 'w') as f:
            f.write(backup)
        os.chmod("app/app.routing.ts", 0o750)
        os.remove("app/app.routing.ts.bk")
        print(e)
        exit(0)


#TODO para ke sirve el boton limite de velocidad del bondi
