'''
isEven takes a single integer parameter a >= 0 returning true if a is even, and false if a is odd.
'''


def isEven(a):
    if a%2 ==0:
        return True

    return False
#test code for isEven
print(isEven(0))
print(isEven(10))
print(isEven(9))

for i in range (0, 100, 1):
    print(str(i)+" is "+ str(isEven(i)))


def missing_char(str, n):

    #solution 1
    '''
    newStr = ""
    newStr = str[0:n] + str[n + 1: len(str)]
    return newStr
    '''


    front = str[:n]   # up to but not including n
    back = str[n+1:]  # n+1 through end of string
    return front + back

    #missing_char('kitten', 1) → 'ktten'
    #missing_char('kitten', 0) → 'itten'
    #missing_char('kitten', 4) → 'kittn'

