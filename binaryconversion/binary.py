import tkinter as tk

print("Stage 1")


def process(*args):
	print("process")

	val = ent_value.get()
	print(val)



#check to make sure it is string of 1's and 0's



#if val is valid
	# remove left most -
	#conversions
	#update display with conversion
#else:
	#update dispaly wiht error message.


	ent_value.delete(0,tk.END)	


root = tk.Tk()

#constructing widgets
lab_instructions = tk.Label(root, text = "Enter Binar")
ent_value = tk.Entry(root)
lab_results = tk.Label(root, text = "--")

#configure widgets

#add widgets to window

lab_instructions.pack() 
ent_value.pack()
lab_results.pack()





root.bind("<Return>", process)
root.mainloop()