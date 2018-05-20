#!/usr/bin/env python3

import re
import os
from pathlib import Path

def install(direct=True):
	try:
		with open(str(Path.home())+ "/.bashrc", 'r') as f:
			flag = False
			data = f.readlines()
			for i in range(0, len(data)):
				if re.match("alias[ \t]*mcn[ \t]*=[ \t]*", data[i]):
					flag = True
					break
		if flag:
			if direct: print("MCN seems to be already installed")
		else:
			os.popen('''echo 'alias mcn="./mcn"' >> ~/.bashrc''')
			if direct: print("MCN installed successfully")
	except BaseException as e:
		if direct: print("An error occured during the installation: " + str(e))

if __name__ == "__main__":
	install(True)