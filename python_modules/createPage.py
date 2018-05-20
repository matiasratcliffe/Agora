import re
import os
import sys
import yaml

def error(msg):
    print('\x1b[6;31;28m' + str(msg) + '\x1b[0m')

def dic2str(dic, unquoted=""):
    ret = "{"
    for key in dic:
        ret += " " + key + ": " + ('"'*(key!=unquoted)) + dic[key] + ('"'*(key!=unquoted)) + ","
    return ret[:-1] + " }"

def createPage(argv, delete=False, dev=False):
    # Validating input
    if (len(argv) != 2):
        error("\nInvalid number of arguments: Expected: 1, Recieved: " + str(len(argv)-1) + "\n")
        exit(1)

    argv[1] = str(argv[1]).lower()
    argv[1] = argv[1].split("/")
    name = argv[1][-1]
    argv[1].remove(name)
    subpath = "/".join(argv[1])
    if (len(subpath) > 0):
        subpath += "/" #le agrego una '/' al final para facilitarme la

    if (len(name) < 3 or len(name) > 14):
        error("\nPage name must be 3-14 characters long\n")
        exit(1)

    if not (re.fullmatch("[a-z]+[0-9]*", name)):
        error("\nPage name must be pure characters and may end with a number\n")
        exit(1)

    if (len(subpath) > 0 and not re.match("([a-z]+[0-9]*/)+", subpath)):
        error("\nPage subpaths must be pure characters and may end with a number\n")
        exit(1)

    # Checking if it is a valid project folder

    try:
        if not (os.path.isdir("app")):
            raise NotADirectoryError("\nError! Couldn't find 'app' folder!\n")
        if not (os.path.isfile("app/app.routing.ts")):
            raise NotADirectoryError("\nError! Couldn't find 'app/app.routing.ts' file!\n")
        if not (os.path.isdir("app/pages")):
            raise NotADirectoryError("\nError! Couldn't find 'app/pages' folder!\n")
        if not (os.path.isfile("app/package.json")):
            raise NotADirectoryError("\nError!Couldn't find 'app/package.json' file!\n")
    except NotADirectoryError as e:
        print(e)
        exit(1)
    except:
        error("Error!\nSomething happened while checking for local dependencies")
        error("Make sure you have enough priviliges!\n")
        exit(1)

    # Checking if the page folder already exists

    if (os.path.isdir("app/pages/" + name)):
        error("\nError! Page folder '" + name + "' already exists!\n")
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
<<<<<<< HEAD
            #el r"" para ke no me escape el \2 y me lo tome como group backreference
=======
            #el r"" para ke no me eskape el \2 y me lo tome como group backreference
>>>>>>> 21c19486c4cd9ea76e1a475610bc9b52c268b362
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
                    error("\nWarning! Your there are routes which when converted to lower case have the same name!\n")
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
        sorted(list(map(lambda e : e[0], imports)))
        if (sorted(components) !=sorted(list(map(lambda e : e[0], imports)))):
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
        error("\nYour current app's format doesn't seem to correspond with the MCN Angular standard")
        error("It's not safe to proceed: " + str(e) + "\n")
        exit(2)

    if (name in list(map(lambda e : e.lower()[0:len(e)-len("component")], components))):
        print("\nError! A page with that name already exists\n")
        exit(1)

    try:
        if not dev:
            with open("app/app.routing.ts", 'r') as f:
                backup = f.read()
            with open("app/app.routing.ts.bk", 'w') as f:
                f.write(backup)
            os.chmod("app/app.routing.ts.bk", 0o750)

        indepRoutes = list(filter(lambda e : "component" not in e, routes))
        routes = list(filter(lambda e : "component" in e, routes))
        if not dev:
            with open("app/app.routing.ts", 'w') as f:
                for e in imports:
                    f.write("import { " + e[0] + " } from \"./pages/" + (str(e[1])*(e[1]!=None)) + e[0].lower()[0:len(e[0])-len("component")] + "/" + e[0].lower()[0:len(e[0])-len("component")] + ".component\";\n")
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

        if not dev:
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
                f.write("")
            with open("app/pages/" + subpath + name + "/" + name + ".component.css", 'w') as f:
                f.write("")
            os.remove("app/app.routing.ts.bk")
    except BaseException as e: #restore backup if posible and ask for priviliges
        if not dev:
            with open("app/app.routing.ts.bk", 'r') as f:
                backup = f.read()
            with open("app/app.routing.ts", 'w') as f:
                f.write(backup)
            os.chmod("app/app.routing.ts", 0o750)
            os.remove("app/app.routing.ts.bk")
        print(e)
        exit(0)

#TODO para ke sirve el boton limite de velocidad del bondi
