def check_pal(s):
    hi = len(s) -1
    lo = 0

    while lo < hi:
        if s[hi] != s[lo]:
            return False
        lo += 1
        hi -= 1
    return True

nums = []
for i in range(900,999):
    for j in range(900,999):
        nums.append(str(i*j))

nums.reverse()
for n in nums:
    if check_pal(n) == True:
        print n
        break
