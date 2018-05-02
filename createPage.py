#!/usr/bin/env python3

import re
import os
import sys

def trim(string):
    groups = re.match("[ \n\t]*(.*)[ \n\t]*", string)
    return groups.group(1)

# Validating input
# TODO add support for subdirectories pages

if (len(sys.argv) != 2):
    print("\nInvalid number of arguments: Expected: 1, Recieved: " + str(len(sys.argv)-1) + "\n")
    exit(1)

sys.argv[1] = str(sys.argv[1]).lower()

if (len(sys.argv[1]) < 3 or len(sys.argv[1]) > 20):
    print("\nPage name must be 3-20 characters long\n")
    exit(1)

if not (re.fullmatch("[a-z]+[0-9]*", sys.argv[1])):
    print("\nPage name must pure characters and may end with an integer\n")
    exit(1)

print("\nNativeScript MACANA Page Creator")

# Checking if it is a valid project folder

try:
	print("\nChecking for necesary dependencies...", end="")
	if not (os.path.isdir("app")):
		print("Error!\nCouldn't find 'app' folder!\n")
		exit(1)
	if not (os.path.isfile("app/app.routing.ts")):
		print("Error!\nCouldn't find 'app/app.routing.ts' file!\n")
		exit(1)
	if not (os.path.isdir("app/pages")):
		print("Error!\nCouldn't find 'app/pages' folder!\n")
		exit(1)
	if not (os.path.isfile("app/package.json")):
		print("Error!\nCouldn't find 'app/package.json' file!\n")
		exit(1)
	print("Done!\n")
except:
    print("Error!\nSomething happened while checking for local dependencies")
    print("Make sure you have enough priviliges!\n")
    exit(1)

# Checking if the page folder already exists

if (os.path.isdir("app/pages/" + sys.argv[1])):
    print("\nError! Page folder '" + sys.argv[1] + "' already exists!")
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
        buffer[i] = trim(buffer[i])
    
    #la primera seccion
    first = []
    for line in buffer[0].split("\n"):
        result = re.match("^import[ \t]*{[ \t]*(.*)Component[ \t]}[ \t]*from[ \t]*\"./pages/([a-z]+[0-9]*)(/.*)\2\.component\";$", trim(line)) #this permits pages reagrupations in subdirectories
        if not (result):
            raise BaseException("First section general pattern did not match")
        #Me aseguro de ke no haya nada raro en el nombre del componente importado
        if (result.group(1).lower() != result.group(2) or not re.fullmatch("[A-Z][A-Za-z]+[0-9]*", result.group(1))):
            raise BaseException("First section folder is not lowercase of component, or name is invalid")
        for elem in first:
            if (elem[0] == result.group(1)):
                print("Error! You seem to have a repeated page!\n")
                exit(4)
            if (elem[0].lower() == result.group(1).lower()):
                print("Warning! Your there are routes which when converted to lower case have the same name!\n")
        first.append([result.group(1), result.group(2)])
    
    #la segunda seccion
    second = []
    result = re.match("^routes[ \t]*=[ \t]*(\[.*\]);$", buffer[1])
    if not (result):
        raise BaseException
    #result.group(1) es [ dfldkjfl, dfndfnjk, ldf]
    print(result.group(1))
    #and look out for the start page
    
    #la tercera, primera linea 'navigatableComponents = [' y la ultima '];' pero tengo ke admitir variaciones, asike mejor json o algo asi
    third = []
    result = re.match("^navigatableComponents[ \t]*=[ \t]*(\[.*\]);$", buffer[1])
    if not (result):
        raise BaseException
    #trim 'navigatableComponents = ' and get the pseudo json!!!!!!!!!! TODO -> result.group(1) es [ dfldkjfl, dfndfnjk, ldf]
    
    #ademas controlar ke el numero de entries en cada uno sea el mismo, e igual a la cantidad de carpetas en pages/
    if (len(first) != len(second) or len(second) != len(third) or len(third) != nPaginas):
        print("The numbers of folders and declared pages is not the same!\n")
        exit(3)
except BaseException as e:
    print("Your current app's format doesn't seem to correspond with the MACANA Angular standard")
    print("It's not safe to proceed: " + str(e) + "\n")
    exit(2)

#TODO para ke sirve el boton limite de velocidad del bondi