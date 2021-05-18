'''
basicly, the reverse ciphe revereses the entire sentence 
'''
message = 'This is program to explain reverse cipher.'
translated = '' #cipher text is stored in this variable
i = len(message) - 1
#while loop that runs and changes each position. 
while i >= 0:
   translated = translated + message[i]
   i = i - 1
print("The cipher text is : ", translated)