function startGame() {
    let start = confirm("Do you want to play the game?");
    if (start === true) {
        let user = prompt("Name Your Warrior:");
        startCombat(user);
    }
    else if (start === false) {
        console.log("Come back when you're up for the CHALLENGE!");
    }
}
startGame();


function startCombat(user) {
    let leaveGame = true;
    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0;

    //This is the while loop for the game
    while (userHealth > 0 && grantHealth > 0 && wins < 3 && leaveGame === true) {
        userHealth = userHealth - getDamage();
        grantHealth = grantHealth - getDamage();
        console.log(`${user} has ${userHealth} health left.`);
        console.log(`The Evil Grant has ${grantHealth} health left.`);

        leaveGame = confirm("Do you want to continue fighting?");

        if (leaveGame === false) {
            console.log("You have surrendered!")
            break;
        }

        //If Grant and User both lose
        else if (userHealth <= 0 && grantHealth <= 0) {
            console.log("TIE! You must defeat the Evil Grant! Play Again!");
        }

        //If User Wins
        else if (grantHealth <= 0) {
            wins = wins + 1;
            grantHealth = 10;
            console.log("You WON this round");
            console.log(`You have won ${wins} time(s)!`);
        }

        //If User loses
        else if (userHealth <= 0) {
            console.log("YOU WERE DEFEATED by EVIL GRANT! Play Again!");
        }


    }

    //This displays when Grant is defeated 3 times AND there is not a losing tie between USER and Grant
    if (win = 3 && userHealth > 0 && leaveGame === true) {
        console.log("You have DEFEATED the EVIL GRANT 3 times and SAVED the UNIVERSE!")
    }
}


function getDamage() {
    let damage = Math.floor(Math.random() * (5) + 1);
    return (damage);
}
