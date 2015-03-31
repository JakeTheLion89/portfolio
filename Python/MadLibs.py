# August 4th 2013
# Still learning python
# made this game script as an exercise in parsing characters

game_dict = {
    "MEAL" : """Good evening! I am *male-proper-name* and
    I will be your *single-person-adjective* waiter tonight.
    For our specials, we have a delicious tray of *plural-noun*,
    *single-noun-animal* fingers and *single-noun* salad.

    For our main course we have the chef special; a *single-noun*
    roasted in a brick *single-noun* for 20
    *plural-measure-of-time*. It's served with a mouth-watering
    side of *plural-noun* and *plural-noun*.

    For dessert, you have a choice of *adjective* *plural-noun*
    or sweet *plural-noun*. Please take a look at our specialty
    coffees roasted in the *plural-noun* of *name-of-a-country*
    and teas from the *common-singular-noun-place*
    of *name-of-person*.""",

    "TEST" : """time to test *period*. *exclamation-mark*!
    *question-mark*? *comma*, *colon*:"""
    }

print """Welcome to Mad Libs!"""

play = "Y"
while play == "Y" or play =="YES":
    print "What mad-lib do you want to play?"
    print game_dict.keys()

    game = raw_input().upper()
    while game not in game_dict.keys():
        game = raw_input("I didn't get that. What game did you want?").upper()

#Game Operation
    story = game_dict[game].split() #seperate all words in the story into a list of words

    def mad_libs_switch(tale): # defined word replacement function
        n = 0
        for word in tale:
            if "*" in word: # words beginning with '*' signify a mad lib

                if word[len(word)-1] in ".!:?,": # presever punctuation for mad libs at the end of a sentence
                    tale[n] = raw_input ("Enter a(n) " + word[:len(word)-1] + ":")
                    tale[n] = tale[n] + word[len(word)-1]
                else:
                    tale[n] = raw_input ("Enter a(n) " + word + ":")
            n = n + 1

    mad_libs_switch(story)

    print "\n" + " ".join(story) + "\n"

    play = raw_input("Play again? Type Y/N.").upper()

print "Bye!"
