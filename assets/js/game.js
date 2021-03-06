// ---------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: --------------------------------------------------------------------- //
// -----------------------------------------------------------------------1. GAME FUNCTIONS //
// -----------------------------------------------------------------------2. GAME VARIABLES //
// -----------------------------------------------------------------------3. START THE GAME //
// ---------------------------------------------------------------------------------------- //



// 1. GAME FUNCTIONS----------------------------------------------------------------------- //

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
};

// fight or skip function 
var fightOrSkip = function() {
    // ask the player if they would like to fight or skip the fight
    var promptFight = window.prompt(
        "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
        );

    // validate prompt answer
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // making promptFight case-insensitive
    promptFight = promptFight.toLowerCase();
    
    // if player typed "SKIP", "skip", or "Skip" then skip the fight
    if (promptFight === "skip") {
        // confirm player wants to skip the fight. 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert (playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            
            // return true if player wants to leave
            return true;
        }
    }
    return false;
};

// fight function
var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;

    // randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    
    // repeat and execute as long as the enemy robot is still alive
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
                // if true, leave fight by breaking the loop
                break;
            }

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            
            // player attacks - remove enemy's health by random number based on player's attack
            enemy.health = Math.max(0, enemy.health - damage);
            // log enemy.health
            console.log (
                playerInfo.name + 
                " attacked " + 
                enemy.name + 
                ". " + 
                enemy.name + 
                " now has " + 
                enemy.health + 
                " health remaining."
            );
            
            // did the enemy robot die? check the enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                
                // award player money for winning
                playerInfo.money = playerInfo.money + 20;

                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

        // player gets attacked first
        } else {
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
        }

        // enemy robot attacks - remove player's health by enemy attack, ensuring non-negative
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // log playerInfo.health
        console.log (
            enemy.name + 
            " attacked " + 
            playerInfo.name + 
            "." + 
            playerInfo.name + 
            " now has " + 
            playerInfo.health + 
            " health reamining."
        );
        
        // did the player die? check the player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while() loop if player is dead
            break;
        
        } else {
            window.alert(
                playerInfo.name + 
                " still has " + 
                playerInfo.health + 
                " health left.");
        }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
};

// function to start a new game
var startGame = function() {
    // reset player stats for every playthrough
    playerInfo.reset();
    
    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i=0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, (arrays start at 0 so index is +1)
            window.alert("Welcome to Robot Gladiators! Begin Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemy.name array
            var pickedEnemyObj = enemyInfo[i];

            // reset next enemy.health before starting a new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            console.log(pickedEnemyObj);

            // pass the pickedenemy.name variable's value into the fight function
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                // ask if the player wants to use the store before the next round
                var storeConfirm = window.confirm(
                    "The fight is over. Do you want to visit the store before the next round?"
                    );
                
                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        
        // if player isn't alive, stop the game
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after loop ends, player is either out of health or enemies to fight, so run endGame()
    endGame();
};

// endgame() function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }

    // if the player score is higher, player earns new high score
    if (playerInfo.money > highScore) {
        // set the new high score object into localStorage
        localStorage.setItem("highscore", playerInfo.money);
        // set new player robot's name object into localStorage
        localStorage.setItem("name", playerInfo.name);

        // send player the message that they beat the high score.
        alert(
            "Congratulations, " + 
            playerInfo.name + 
            ", you have beat the high score!");
    
    // if the current high score is higher, player does not earn high score
    } else {
        // send player the message that the player did not beat the high score
        alert(
            "Unfortunately, you did not beat the high score. Try again next time!"
            );        
    };
    
    // ask the player if they want to play again
    var confirmReplay = window.confirm("Would you like to play again?");
    
    // yes (true) - play again
    if (confirmReplay) {
        startGame();

    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // ask the player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?" +
        "Please enter one of the following: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
        );

    // convert prompt from string to integer data type
    shopOptionPrompt = parseInt(shopOptionPrompt);

    // use switch to carry out action
    switch (shopOptionPrompt) {
        // refill
        case 1:
            playerInfo.refillHealth();
            break;
        
        // upgrade
        case 2:
            playerInfo.upgradeAttack();
            break;
            
        // leave
        case 3:
            window.alert("Leaving the store.");
            break;
        
        // any other option
        default: 
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// END OF GAME FUNCTIONS SECTION----------------------------------------------------------- //



// 2. GAME VARIABLES----------------------------------------------------------------------- //

// function to set name
var getPlayerName = function() {
    var name ="";

    // add loop here with prompt and condition
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

// setting up our player variables
var playerInfo = {
    name: getPlayerName(),
    health: 100, 
    attack: 10, 
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling " + playerInfo.name + "'s health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading " + playerInfo.name + "'s attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

// setting up enemy variables
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

// END OF GAME VARIABLES SECTION----------------------------------------------------------- //



// 3. START THE GAME----------------------------------------------------------------------- //

// calling the startGame() function to start the game when the page loads
startGame();

// END OF START THE GAME SECTION----------------------------------------------------------- //