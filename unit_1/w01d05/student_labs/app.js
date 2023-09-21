// Johnny Chen, Christopher Anderson, Ren Dooley.


const prompt = require('prompt-sync')();

const username = prompt('What is your name?');
let gameStarted = false;
let housesChopped = []


const q1 = () => {
    const answer1 = prompt("You see three houses, House 1 is made of straws, House 2 is made of sticks, House 3 is made of bricks. Which one would you like you head to? [House 1, House 2, House 3]")
    housesChopped.push(answer1.toLowerCase())
    q2(answer1.toLowerCase())
}

const q2 = (q1) => {
    const answer2 = prompt(`You walk upto the house, would you like to open the door? [Yes/No]`)

    if(answer2.toLowerCase() === "yes") q3(true)
    else q3(false)
}

const q3 = (q2) => {
    if(q2){
        const answer3 = prompt('User tries to open the door but it is locked. Would you like to chop it down? [Yes/No]')

        if(answer3.toLowerCase() === "yes") q4(true)
        else q4(false)

    } 
    else {
        console.log('User turns around')
        q1()
    }
    
}


const q4 = (q3) => {
    if(q3){

        if(housesChopped.length < 3){
            console.log(`User chops the house down and a piggy ran out`)

            q1()
        }
        else {

            let order = []
            for(let i = 0; i < housesChopped.length; i++){   
                
                if(housesChopped[0].includes("house 1")) order.push("1")
                if(housesChopped[0].includes("house 2")) order.push('2')
                if(housesChopped[0].includes("house 3")) order.push('3')

                if(housesChopped[1].includes("house 3")) order.push('3')
                if(housesChopped[1].includes("house 2")) order.push('2')
                if(housesChopped[1].includes("house 1")) order.push('1')

                if(housesChopped[2].includes("house 1")) order.push('1')
                if(housesChopped[2].includes("house 2")) order.push('2')
                if(housesChopped[2].includes("house 3")) order.push('3')
            }


            if(order[0].includes('1') && order[1].includes('2')) {
                setTimeout(() => {
                    console.log("You've chopped down all the houses, you're taken to jail.")
                }, 1000);
                
            } 
            else if (order[0].includes('3') && order[1].includes('2')){
                setTimeout(() => {
                    console.log("The pigs caught you")
                }, 1000);
                
                setTimeout(() => {
                    console.log('Get Out!')
                }, 1200);
                
            }
            else {
                
                console.log("You see a pig in clown make up coming towards you.")
                console.log("He looks mad!")  
                const finalAnswer = prompt("Would you like to run away? [Yes/No]")
                console.log(`Well too bad ${username} I know where you live!`)
                
            }

            setTimeout(() => {
                console.log("GAME OVER")
            }, 1500);
            
            gameStarted = false
        }
        
    }
    else {
        setTimeout(() => {
            console.log('You froze to death')
        }, 1500);
       
        gameStarted = false;
    }
}


const startGame = () => {
    gameStarted = true

    if(gameStarted) q1()
}


startGame()



