import requests
import json
import tkinter as tk

#Get Key
#This is a file not in my respository I don't want you to have it
file = open("..//..//API_Keys//fixerkey.txt","r")

key = file.read()


resp = requests.get('http://data.fixer.io/api/latest?access_key='+key)

#Converts response to JSON
data = resp.json()

#print(data["base"])
#print(data["date"])
#print(data["rates"]["USD"])


#step 1, create 2 lists
country = []
value = []

rate_data = data["rates"]

def action(x):
	print(x)
	print(rate_data[x])

#step 2: copy all the data from the pull into these lists
#loop through all rates using a "special loop"

for key in rate_data: 
	country.append(key)
	value.append(rate_data[key])

print(country)
print(value)


root = tk.Tk() #makes root window

f1 = tk.Frame(root)


cur_label = tk.Label(f1, text = "Select Currency")
variable = tk.StringVar(f1)
variable.set(country[0]) #d
dropDown = tk.OptionMenu(f1, variable, *country, command = action)

cur_label.pack()
dropDown.pack()

f1.pack()



root.mainloop() #starts program and waits for something