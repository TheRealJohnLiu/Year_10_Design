'''
Example here is when the data shows a list of games or injuries by a player or team
'''


list = [1, 0, 1, 1, 0, 2, 1, 1, 1, 1, 0, 1]

count = 0

for i in range(0, len(list), 1):
    if list[i] == 1:
        count = count + 1

print(count)