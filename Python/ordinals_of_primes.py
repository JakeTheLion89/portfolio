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


def main(num_primes):
    prime_count = 1
    n = 1
    while prime_count <= num_primes:
        n += 1
        if check_prime(n) == True:
            prime_count += 1



    print n

if __name__ == '__main__':
    main(103)
