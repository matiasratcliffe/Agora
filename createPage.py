#!/usr/bin/env python3

import re
import os
import sys

if (len(sys.argv) != 2):
    print("error")

if (len(sys.argv[1]) < 3 or len(sys.argv[1]) > 20):
    print("\nPage name\n")

if not (re.match("[a-z]+", sys.argv[1].lower):
    print("error 2")