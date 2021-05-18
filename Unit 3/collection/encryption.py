'''
Let the variable x be the position of the alphabet in the list of alphabets sorted alphabetically
Let the variable y be the position of the alphabet in the entered word
For example, if the user enters 'abcd', the program would find x and y for a, b, c and d one by one
Then, it would find the variable z = 26-x+y and z would be the position of the alphabet in the code 
    in the list of alphabets
In abcd : for a - x = 1, y = 1, so, z = 26-1+1 = 26, so  coded alphabet = 26th alphabet = z
 Similarly, all of a,b,c and d will have coded alphabets as 'z'
 So, 'abcd' will be coded as 'zzzz
 
 A nice idea by Rajdeep Sindhu

 '''


def index_in_alphabet(letter: str) -> int:
    """
    Converts a lowercase letter to an index from 1-26.
    """
    index = 1 + ord(letter) - ord('a') 
    assert 1 <= index <= 26
    return index

def encrypt(a: str) -> str:
    """
    Returns the encrypted version of the input string.
    """
    output = ""
    for i in range(len(a)):
        x = i + 1
        y = index_in_alphabet(a[i])
        z = 26 - x + y
        if z > 26:
            z %= 26
        output += chr(z - 1 + ord('a'))
    return output

if __name__ == '__main__':
    print()
    print("NOTE : Please enter all the alphabets in lowercase...")
    print()
    given = str(input("Please enter the word to be coded: "))
    print()
    print("The code for", given, "is:", encrypt(given))