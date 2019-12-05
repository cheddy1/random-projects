import math
def getVelocity(m,c,s):
    global g
    global p
    g = 9.8 #Gravity
    p = 1.225 #Air Density
    m = m/1000 #Grams to kg
    velocity = math.sqrt((2*m*g)/(p*c*s)) #Terminal Velocity Formula
    printEverything(velocity,m,c,s)
def askUser():
    again = 'y'
    while again == 'y':
        global objectName
        print("\n1) Penny\n2) Standard Brick\n3) Elephant\n4) Manual Input\nWhich object would you like to test? (1-4)")
        answer = input()
        if answer == '1':
            objectName = 'Penny'
            getVelocity(2.5,1.17,.00028)
        if answer == '2':
            objectName = 'Standard Brick'
            getVelocity(3500,.82,.0253125)
        if answer == '3':
            objectName = 'Elephant'
            getVelocity(3000000,.75,8.2)
        if answer == '4':
            print("Enter the name of the object you are testing: ")
            objectName = input()
            print("Enter the mass of the object (g): ")
            m = float(input())
            print("Enter the drag coefficient of the object: ")
            c = float(input())
            print("Enter the reference/frontal area of the object (m^2): ")
            s = float(input())
            getVelocity(m,c,s)
        print("\nDo you want to open the menu again? (y/n)")
        again = input()
def printEverything(v,m,c,s):
    v = round(v,5) #Round velocity to 5 decimals
    v = str(v) #Velocity
    m = str(m*1000) #Mass back to grams
    c = str(c) #Drag Coeff
    s = str(s) #Reference Area
    print("\n"+objectName+" Information:")
    print("Mass: "+m+" g")
    print("Drag Coefficient: "+c)
    print("Reference Area: "+s+" m^2")
    print("Terminal Velocity: "+v+" m/s")
print("--------------------------------------------------------------------------------------------")
print("Terminal velocity calculator coded in python by Christian Edwards on 12/3/2019.")
print("All calculations made by this program are very rough estimates, presented to be simple.")
print("Assumptions are made, including how the density of air is constant, even though it is not.")
print("There is no checking for invalid user input, please always enter valid input.
print("--------------------------------------------------------------------------------------------")
askUser()
