import os
import sys

class DuplicateWarning(Exception):
	def __init__(self, message):
		super(DuplicateWarning, self).__init__("Warning: " + str(message))

class InvalidParameter(Exception):
	def __init__(self, message):
		super(InvalidParameter, self).__init__(str(message))

def parseArgv(specArgs=[], valid1chars=[], validoptions=[], permissive=True):
	pathstack = []
	optarr1   = []
	optarr2   = []
	specParam = {}
	param     = sys.argv[1:]

	# Initial Filter
	for e in param:
		if (type(e) != type("string")):
			raise SyntaxError("One or more parameters not of string type!")
		if (len(e) == 0 or e == '-' or e == '--'):
			raise SyntaxError("Empty parameter detected!")

	# Getting Special Arguments
	if (len(specArgs) > 0):
		i = 0
		aux = []
		while (i < len(param)):
			e = param[i]
			if (len(e) == 2 and e[0] == '-' and e[1] != '-'):
				if (e[1:] in specArgs):
					if ((i + 1) < len(param) and param[i+1][0] != '-'):
						if (e in specParam): # Con '-' incluido para evitar confundir llave con valor
							raise DuplicateWarning("Same Argument passed twice: " + e)
						else:
							specParam[e] = param[i+1]
						i += 2
						continue
					else:
						raise SyntaxError("Invalid or No Argument provided for \"" + e + "\"")
				else:
					aux.append(e)
			elif (len(e) > 2 and e[0] == '-' and e[1] == '-'):
				if (e[2:] in specArgs):
					if ((i + 1) < len(param) and param[i+1][0] != '-'):
						if (e in specParam): # Con '--' incluido para evitar confundir llave con valor
							raise DuplicateWarning("Same Argument passed twice: " + e)
						else:
							specParam[e] = param[i+1]
						i += 2
						continue
					else:
						raise SyntaxError("Invalid or No Argument provided for \"" + e + "\"")
				else:
					aux.append(e)
			else:
				aux.append(e)
			i += 1
		param = aux

	for e in param:
		if (e[0] != '-'):
			if (os.path.isdir(e)):
				pathstack.append(os.path.abspath(e))
			else:
				raise SyntaxError("Invalid Path/Argument: \"" + e + "\"")
		elif (len(e) > 1 and e[1] != '-'):
			optarr1 += e[1:]
		elif (len(e) > 2 and e[2] != '-'):
			optarr2.append(e[2:])
		else:
			raise SyntaxError("Invalid syntax: " + e)

	if not permissive:
		if (pathstack != list(set(pathstack))):
			raise DuplicateWarning("Path List contains duplicates")
		if (optarr1 != list(set(optarr1)) or optarr2 != list(set(optarr2))):
			raise DuplicateWarning("Argument List contains duplicates")

	pathstack = list(set(pathstack))
	optarr1   = list(set(optarr1))
	optarr2   = list(set(optarr2))

	# Separacion y eliminacion de duplicados
	if (len(valid1chars) > 0):
		buff = []
		for e in valid1chars:
			buff += e
		valid1chars  = list(set(buff))
	if (len(validoptions) > 0):
		validoptions = list(set(validoptions))

	# Contrasto recividos con la tabla de parametro
	if (len(valid1chars) > 0):
		for e in optarr1:
			if (e not in valid1chars):
				raise InvalidParameter(str(e))
	if (len(validoptions) > 0):
		for e in optarr2:
			if (e not in validoptions):
				raise InvalidParameter(str(e))

	return [pathstack, optarr1, optarr2, specParam]

# For debugging
if (__name__ == "__main__"):
	try:
		print(parseArgv(["tel"]))
	except Exception as e:
		print(str(e))
