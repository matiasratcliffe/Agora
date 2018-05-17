import re
import os
import sys
import shutil

def error(msg):
    print('\x1b[6;31;28m' + str(msg) + '\x1b[0m')

def patch(argv, full=False, dev=False):

	if (len(argv) == 2 and (len(argv[1]) < 2 or len(argv[1]) > 15)):
		error("\nProject name must be 2-15 characters long\n")
		exit(1)

	current_folder = os.path.split(os.getcwd())[1]

	if (len(argv) == 2 and argv[1] != current_folder and os.path.isdir("../" + argv[1])):
		error("\nError, there is another folder with that name in the parent directory!\n")
		exit(1)

	print ("\nNativeScript MCN Angular-Template patcher")

	try:
		print("\nChecking for necesary dependencies...", end="")
		if not (os.path.isdir("app")):
			error("Error!\nCouldn't find 'app' folder!\n")
			exit(1)
		if not (os.path.isfile("package.json")):
			error("Error!\nCouldn't find 'package.json' file!\n")
			exit(1)
		if not (os.path.isfile("tsconfig.json")):
			error("Error!\nCouldn't find 'tsconfig.json' file!\n")
			exit(1)
		if not (os.path.isfile("app/package.json")):
			error("Error!\nCouldn't find 'app/package.json' file!\n")
			exit(1)
		if not (os.path.isfile("app/App_Resources/Android/app.gradle")):
			error("Error!\nCouldn't find 'app/App_Resources/Android/app.gradle' file!\n")
			exit(1)
		print("Done!")

		if (os.path.isdir("platforms") and full):
			print("Deleting platforms folder...", end="")
			if not dev: shutil.rmtree("platforms")
			print("Done!")
		if (os.path.isdir("node_modules") and full):
			print("Deleting node_modules folder...", end="")
			shutil.rmtree("node_modules")
			print("Done!")

		name = current_folder
		print("\nCurrent folder: " + name)

		if not (len(argv) == 1  or (len(argv) == 2 and argv[1] == name)):
			print("Project's name: " + argv[1] + "\n")
			print("Attempting to change current folder's name to '" + argv[1] + "'...", end="")
			if not dev:
				os.chdir("..")
				os.rename(name, argv[1])
				os.chdir(argv[1])
			name = argv[1]
			print("Done!")
		else:
			print("Project's name: " + name + "\n")

		# package.json
		print("Modifying package.json...", end="")
		with open("package.json", 'r') as f:
			data = f.readlines()
			for i in range(0, len(data)):
				result = re.match("(.*\"id\" ?: ?\").*(\".*)", data[i])
				if (result):
					data[i] = result.group(1) + "org.nativescript." + name + result.group(2) + "\n" #re.match trims the line break
					break
		if not dev:
			with open("package.json", 'w') as f:
				for ln in data:
					f.write(ln)
		print("Done!")

		# app/package.json
		print("Modifying app/package.json...", end="")
		with open("app/package.json", 'r') as f:
			data = f.readlines()
			for i in range(0, len(data)):
				result = re.match("(.*\"name\" ?: ?\").*(\".*)", data[i])
				if (result):
					data[i] = result.group(1) + "tns-" + name.lower() + "-ng" + result.group(2) + "\n" #re.match trims the line break
					break
		if not dev:
			with open("app/package.json", 'w') as f:
				for ln in data:
					f.write(ln)
		print("Done!")

		# app/App_Resources/Android/app.gradle
		print("Modifying app/App_Resources/Android/app.gradle...", end="")
		with open("app/App_Resources/Android/app.gradle", 'r') as f:
			data = f.readlines()
			for i in range(0, len(data)):
				result = re.match("(.*applicationId.*\").*(\".*)", data[i])
				if (result):
					data[i] = result.group(1) + "org.nativescript." + name + result.group(2) + "\n" #re.match trims the line break
					break
		if not dev:
			with open("app/App_Resources/Android/app.gradle", 'w') as f:
				for ln in data:
					f.write(ln)
		print("Done!")

		try:
			if (full or not (os.path.isdir("node_modules") and os.path.isdir("platforms"))):
				print("\nAttempting to install tns-dependencies:\n")
			if (full or not os.path.isdir("platforms")):
				print("------------------------------------------------------")
				print("Adding android platform\n")
				if not dev: os.system("tns platform add android")
				print("------------------------------------------------------")
			if (full or not os.path.isdir("platforms")):
				print("------------------------------------------------------")
				print("Installing node_modules\n")
				if not dev: os.system("tns install")
				print("------------------------------------------------------")
		except:
			print("\nERROR! Make sure 'nodejs', 'npm' and 'tns' are UP TO DATE!\n")
			exit(1)


		print("\nModyfing platforms/android/settings.gradle...", end="")
		with open("platforms/android/settings.gradle", 'r') as f:
			data = f.readlines()
			for i in range(0, len(data)):
				result = re.match("(.*rootProject\.name[ \t]*=[ \t]*\").*(\".*)", data[i])
				if (result):
					data[i] = result.group(1) + name + result.group(2) + "\n" #re.match trims the line break
					break
		if not dev:
			with open("platforms/android/settings.gradle", 'w') as f:
				for ln in data:
					f.write(ln)
		print("Done!")

		print("\nModyfing platforms/android/app/src/main/AndroidManifest.xml...", end="")
		with open("platforms/android/app/src/main/AndroidManifest.xml", 'r') as f:
			data = f.readlines()
			for i in range(0, len(data)):
				result = re.match("([ \t]*package[ \t]=[ \t]*\"org\.nativescript\.).*(\"[ \t]*)", data[i])
				if (result):
					data[i] = result.group(1) + name + result.group(2) + "\n" #re.match trims the line break
					break
		if not dev:
			with open("platforms/android/app/src/main/AndroidManifest.xml", 'w') as f:
				for ln in data:
					f.write(ln)
		print("Done!")

		print("\nModyfing platforms/android/app/src/main/res/values/strings.xml...", end="")
		with open("platforms/android/app/src/main/res/values/strings.xml", 'r') as f:
			data = f.readlines()
			for i in range(0, len(data)):
				result = re.match("([ \t]*<string name=\".*\">).*(</string>[ \t]*)", data[i])
				if (result):
					data[i] = result.group(1) + name + result.group(2) + "\n" #re.match trims the line break
					break
		if not dev:
			with open("platforms/android/app/src/main/res/values/strings.xml", 'w') as f:
				for ln in data:
					f.write(ln)
		print("Done!")

		print("Modyfing platforms/android/app/build.gradle...", end="")
		with open("platforms/android/app/build.gradle", 'r') as f:
			filedata = f.read()
		if not (os.path.isfile("platforms/android/app/build.gradel.bk")):
			if not dev:
				with open("platforms/android/app/build.gradle.bk", 'w') as f:
					f.write(filedata)
		#filedata = filedata.replace('compile "', 'implementation "')
		filedata = filedata.replace('debugCompile "', 'debugImplementation "')
		if not dev:
			with open("platforms/android/app/build.gradle", 'w') as f:
				f.write(filedata)
		print("Done!")

		print("Congiguring '.gitignore'...", end="")
		if not dev:
			with open(".gitignore", 'w') as f:
				f.write("platforms\n")
				f.write("node_modules\n")
				f.write("app/**/*.js")
		print("Done!")

		print("\nEverything Done! All credits to our Lord and Saviour: Mati Ratcliffe\n")

	except Exception as e:
		error("Error!\n\n" + str(e) + "\n")
