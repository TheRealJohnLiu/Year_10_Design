import tkinter as tk

def checkCred(*arg):

    print("checking")

root = tk.Tk()

loginframe = tk.Frame(root)

labunLF = tk.Label(loginframe, text = "username")
entunLF = tk.Entry(loginframe, width = 20)

labpwLF = tk.Label(loginframe, text = "password")
entpwLF = tk.Entry(loginframe, width = 20)

submitLF = tk.Button(loginframe, text = "submit", command = checkCred)


labunLF.pack()
entunLF.pack()
labpwLF.pack()
entpwLF.pack()
submitLF.pack()


homeframe = tk.Frame(root)

labHF = tk.Label(homeframe, text = "welcome, login please")



labHF.pack()
loginframe.pack()
root.mainloop()
print("end program")