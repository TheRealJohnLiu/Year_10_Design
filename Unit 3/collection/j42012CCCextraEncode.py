# J4 2012: Big Bang Secrets
#
# straight forward character manipulation
# in a classic substitution cipher.
#
# the shift = 3 * position + key
#

#Key for shift and the message to encode
key = int(input())
cipher = input()

#empty string
plain = ""

#for loop to go through each character
for i in range(len(cipher)):
    #what each letter is
    letter = cipher[i:i+1]
    #shift acording to key
    shift = 3 * (i+1) + key
    #make x the unicode that is shifted
    x = ord(letter) + shift
    #if it is bigger than Unicode Z, change it to the begginign
    if x > ord("Z"):
        x = ord("A")  + x - ord("Z") - 1
    plain = plain + chr(abs(x)) 
 

print(plain)
