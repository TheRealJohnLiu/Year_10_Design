'''
want to find out average number of goals scored per player on a team
so get number of goals scored by each player 
then divide by number of players

right now is hardcoded values but will integrate the use of api.

'''


goals = [20, 28, 80, 129, 39, 74, 19, 4]

average = sum(goals) / len(goals)

print("Average goals scored per player by this team is: " + str(round(average, 2)))