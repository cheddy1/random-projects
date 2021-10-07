# Algo to find the lcm of two numbers
# Input is in the format of a,b\n
import sys
def gcd(a,b):
    if b == 0:
        return a
    return(gcd(b,a%b))
for line in sys.stdin:
    line = line.replace('\n','').split(',')
    mult = int(line[0])*int(line[1])
    gcd_int = gcd(int(line[0]), int(line[1]))
    if mult % gcd_int == 0:
        mult = mult // gcd_int
    print(mult, end="")
