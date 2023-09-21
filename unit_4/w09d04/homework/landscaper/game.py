userName = input("What is your name?")



User = {
    "name": userName,
    "bank": 0,
    "currentTool": {
        "toolName": "teeth",
        "cost": 0,
        "income": 1
    }
}

Shop = [
    { "toolName": "rusty scissors",
        "cost": 5,
        "income": 5
    },
    { "toolName": "old-timey push lawnmower",
        "cost": 25,
        "income": 50
    },
    { "toolName": "fancy battery-powered lawnmower",
        "cost": 250,
        "income": 100
    },
    { "toolName": "starving students",
        "cost": 500,
        "income": 250
    },
]


# loops through shop list
def openShop():
    for item in Shop:
        print(item)

    # allows user to buy an item with the correct tool name or chose nothing to move on without buying.
    itemToBuy = input("What would you like to buy? [Tool Name Or Nothing]").lower()
    whatToBuy(itemToBuy)


# function that takes the selected answer from openShop and decides what to do.
def whatToBuy(item):
    index = 0
    for tool in Shop:
        if item == tool['toolName']: 
            if tool["cost"] <= User["bank"]:
                print("Congrats you bought " + tool["toolName"])
                User['currentTool'] = tool
                Shop.pop(index)

                User['bank'] -= User["currentTool"]['cost']
            else:
                print("Not enough money to buy this.")
        elif item == "nothing":
            print('Okay thanks for shopping today!')
            break
        index += 1
    



# A function that checks and notifies users if they can buy a new tool.
def checkShop(): 
    for item in Shop:
        if item['cost'] <= User['bank']:
            print(f"{User['name']}, you can buy a new tool!")
            break


# Allows users to earn money and runs the checkShop function each time.
def goToWork():
    print(f"{User['name']} worked today and earned {User['currentTool']['income']}.")
    User['bank'] += User['currentTool']['income']
    print(f"Your current bank amount is: {User['bank']}")
    checkShop()


# starts game
def gameStart():
    # condition that allows while loop to keep running
    gameRounds = 0

    # once gameRounds hits 100 it stops.
    while gameRounds < 100:

        # winning conditions that are checked each loop.
        if User["currentTool"]["toolName"] == "starving students":
            if User["bank"] >= 1000:
                print(f"Thanks for playing {User['name']}!")
                print("YOU WON!")
                break
        
        # asks user what they would like to do.
        whatToDo = input("What would you like to do? [Work Or Shop]").lower()

        # condition that checks what the user would like to do.
        if whatToDo == "work":
            goToWork()
            gameRounds += 1
        elif whatToDo == "shop":
            openShop()
            gameRounds += 1



gameStart()