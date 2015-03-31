# July 23
# Learning python
# Excercise in "random" module

import random

def wordScram():
    print """Welcome to Word Scram. Choose a difficulty and unscramble 10 words!

    """
    ## Game Dictionaies and Variables
    game = {
    "EASY" : ["night", "quill" ,"book", "wine", "grass", "fill","quilt","kind","public","brain" ],
    "MEDIUM" : ["voltage","lighting", "risking","better", "music", "master", "lovely", "carbon", "pursue", "teeth"],
    "HARD" : ["glaring","padded", "draped", "clothes","sliders","medicine","systemic","battle", "genius", "blaring"],
    }
    score= 0
    wordBatch= "none"

    ##Game setup
    play = raw_input("Do you want to play? Y/N?: ").upper()
    while play != "Y" and play != "YES" and play != "N" and play != "NO":
        play = raw_input("Sorry. Didn't get that. Do you want to play? Y/N?: ").upper()

    while play == "Y" or play == "YES":

        wordBatch = raw_input("What difficulty? Easy, Medium, or Hard?: ").upper()
        while wordBatch != "EASY" and wordBatch != "MEDIUM" and wordBatch != "HARD":
            wordBatch = raw_input("Sorry. Didn't get that? Easy, Medium, or Hard?: ").upper()

        start = raw_input("Press enter to start!")

    ## Main game operation
        for word in game[wordBatch]:
            scramble = word.upper()
            while scramble == word.upper():
                scramble = list(word)
                random.shuffle(scramble)
                scramble = "".join(scramble)
            else:
                print scramble.upper()

            if raw_input("Answer: ").upper() == word.upper():
                print """Correct!
                    """
                score = score + 1
            else:
                print """Wrong!
                      """
        print "Game Over!"

     ## scoring output
        if score < 8:
            print "You got " + str(score) + " out of 10 right. You can do better."

        elif score < 10:
            print "Good Job! You got " + str(score) + " out of 10 right."

        elif score == 10:
            print "Awesome! You got a 10 out of 10! Perfect score!"

        score = 0

        play = raw_input("Do you want to play again? Y/N: ").upper()

        while play != "Y" and play != "YES" and play != "N" and play != "NO":
            play = raw_input("Sorry. Didn't get that. Do you want to play again? Y/N?: ").upper()

        if play == "N" or play == "NO":
            print "Thanks for playing!"
    ##End of Game
    print "Bye!"

wordScram()
