def checkEmail(email):

	c = email.count("@")
	return c == 1

def modEmail(email):


	if (checkEmail(email) == False):
		return -1

	index_of_at = email.index("@")
	#print(index_of_at)

	result = ""
	for i in range(0, index_of_at,1):
		if email[i] != ".":
			result = result + email[i]

	result = result + email[index_of_at:len(email)]
	return result




print(modEmail("marshal.wang@gmail.com")) # marshalwang@gmail.com
print(modEmail("m.arshalwang@gmail.com")) # marshalwang@gmail.com
print(modEmail("ma.rshal.wan.g@gmail.com")) # marshalwang@gmail.com
print(modEmail("ma.rshal.wan.g@gma@il.com")) # -1

