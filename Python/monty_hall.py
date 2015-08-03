import random

def monty_hall(num_rounds,choice_bool):

    round_counter = 0
    doors = [True, False, False]
    doors_for_2nd_choice = []
    win_counter = 0
    loss_counter = 0
    choice = True

    while (round_counter < num_rounds):
        #first choose a door
        choice = random.choice(doors)
        #then remove a False door (if you are adding choice)
        if choice_bool == True:
            doors_for_2nd_choice = list(doors)
            doors_for_2nd_choice.pop()
            #tell player to switch
            if choice == True:
                choice = False
            else:
                choice = True

        # register result
        if choice == True:
            win_counter += 1 # NEW CAR!
        else:
            loss_counter += 1

        round_counter += 1

    # Show off calculations
    if choice_bool == True:
        print "====Monty Hall with Switch===="
    else:
        print "====Monty Hall without Switch===="

    print "Number of Games " + str(num_rounds)
    print "Number of Wins: " + str(win_counter)
    print "Number of Losses: " + str(loss_counter)
    print "Percentage of Wins: "+ str(100 * win_counter/num_rounds) + "%"

#run test twice (once with switches, once without)
monty_hall(1000000, True)
monty_hall(1000000, False)
