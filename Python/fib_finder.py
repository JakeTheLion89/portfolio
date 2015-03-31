# first script learning how to list fibonacci numbers

fibs=[1,2]
def fib_finder(x):
    for number in range (3,x):
    	y = fibs[len(fibs)-1] + fibs[len(fibs)-2]
        fibs.append(y)
    print fibs

input = raw_input("How many fibs?: ")

fib_finder(int(input))
