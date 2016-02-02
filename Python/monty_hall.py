import random

def monty_hall(num_rounds,switch_bool):

    round_counter = 0
    doors = [True, False, False]
    doors_for_2nd_choice = []
    win_counter = 0
    loss_counter = 0
    choice = True

    while (round_counter < num_rounds):
        #first choose a door
        choice = random.choice(doors)

        # monty_hall then removes one of the doors
        # and invites the player to switch

        #if the player chooses to switch
        if switch_bool:
            #tell player to switch
            if choice:
                choice = False
            else:
                choice = True

        #else the player stays with the result

        # register result
        if choice == True:
            win_counter += 1 # NEW CAR!
        else:
            loss_counter += 1 # A GOAT BLEEEAHHH

        round_counter += 1

    # Show off calculations
    if switch_bool:
        print "\n====Monty Hall with Switch===="
    else:
        print "\n====Monty Hall without Switch===="

    print "Number of Games " + str(num_rounds)
    print "Number of Wins: " + str(win_counter)
    print "Number of Losses: " + str(loss_counter)
    print "Percentage of Wins: "+ str(100 * win_counter/num_rounds) + "%"

#run test twice (once with switches, once without)
monty_hall(1000000, True)
monty_hall(1000000, False)
