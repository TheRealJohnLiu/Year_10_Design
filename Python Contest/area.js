
x1 = 2
y1 = 2
x2 = 4
y2 = 4

r = Math.pow((y2-y1),2) + Math.pow((x2-x1),2)

a = 3.14159 * r * r

a = a*1000
a = Math.round(a)
a = a/1000
console.log(a)