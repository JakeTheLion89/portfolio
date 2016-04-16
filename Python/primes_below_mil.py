from math import sqrt

def check_prime(num):
    if num == 2:
        return True

    limit = sqrt(num) + 1

    x = 2

    while x <= limit:
        if num % x == 0:
            return False
        x += 1

    return True

sp = 0
for n in range(2,2000000):
    if check_prime(n) == True:
        sp += n

print sp
