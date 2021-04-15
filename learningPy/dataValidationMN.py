# @Christian Edwards 3/5/2021
# This program is most of 6.2 from https://www.metronetinc.com/wp-content/uploads/MetroNet-Developer-Test-2020-08-31-1.pdf
# I wanted to get more python experience so I took this on. Did not finish the city validation
# because to be honest, I'm not sure what it's asking. So I stopped there.


import json
import re

# Opens an input json file, stores it, and passes it to sortDict for sorting.
def openInput():
    with open('input.json') as f:
      data = json.load(f)
      sortDict(data)

# Sorts the dictionary alphabetically by sorting a list of the names.
def sortDict(unsortedNames):
    i = 0
    nameOrder = [None]*len(unsortedNames)
    for key in unsortedNames:
        name = unsortedNames[i]['fullName']  
        nameOrder[i] = name
        i += 1
    nameOrder.sort()
    printOutput(nameOrder, unsortedNames)

# Phone number validator
def validNumber(number):
    # Regex sourced from: https://stackoverflow.com/a/16702965
    check = re.compile('^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$')
    if check.match(number) == None:
        return False
    else:
        return True
 
# Email address validator
def validEmail(email):
    #Regex sourced from: https://emailregex.com/
    check = re.compile('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')
    if check.match(email) == None:
        return False
    else:
        return True

#Prints the entry's name, checks phone numbers and email, and prints whether they are valid
def printOutput(nameOrder,data):
    j = 0
    for key in data:
        i = 0
        while data[i]['fullName'] != nameOrder[j]:
            i += 1
        if(validNumber(data[i]['phoneNumber']) == False and validEmail(data[i]['emailAddress']) == False):
            print(data[i]['fullName'] + '\nEmail and Phone are invalid.\n')
        elif(validEmail(data[i]['emailAddress']) == False):
            print(data[i]['fullName'] + '\nEmail is invalid.\n')
        elif(validNumber(data[i]['phoneNumber']) == False):
            print(data[i]['fullName'] + '\nPhone is invalid.\n')
        else:
            print(data[i]['fullName'] + '\nValid\n')
        j += 1

if __name__=="__main__":      
    openInput()
