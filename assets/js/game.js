<<<<<<< HEAD
window.alert("This is an alert! JavaScript is running!");
=======
// *********************Variables*********************
// setting up our player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// setting up enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
 
// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is still alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask the player if they would like to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player typed "SKIP", "skip", or "Skip" then skip the fight
        if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
            // confirm player wants to skip the fight. 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                // log playerMoney
                console.log(playerName + " now has " + playerMoney + " money remaining.");
                break;
            }
        }

        // if player did not type "SKIP", "Skip", or "skip", then fight
        // player attacks - remove enemy's health by playerAttack amount
        enemyHealth = enemyHealth - playerAttack;
        // log enemyHealth
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // did the enemy robot die? check the enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            
            // award player money for winning
            playerMoney = playerMoney + 20;

            // if the enemy's health is zero or less, exit from the while loop.
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // enemy robot attacks - remove player's health by enemyAttack amount
        playerHealth = playerHealth - enemyAttack;
        // log playerHealth
        console.log (
            enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health reamining."
        );
        
        // did the player die? check the player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // if the player's health is zero or less, exit from the while loop. 
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    };
};

// expressing the startGame() function to start a new game
var startGame = function() {
    // reset player stats for every playthrough
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    // fight each enemy robot by looping over them and fighting them one at a time
    for(var i=0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {

            // let player know waht round they are in, remember that arrays start at 0 so it needs to be +1
            window.alert("Welcome to Robot Gladiators! Begin Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset next enemyHealth before starting a new fight
            enemyHealth = 50;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the value of the enemyName parameter
            fight(pickedEnemyName);
        
        // if player isn't alive, stop the game
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run endGame() function
    endGame();
};

// endgame() function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if the player is still alive, the player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
}

// ask the player if they want to play again
var confirmReplay = window.confirm("Would you like to play again?");
    // yes (true) - play again
    if (confirmReplay) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }


// // ask player if they want to visit the shop
// var promptShop = window.prompt("Would you like to VISIT the shop? Enter 'VISIT' or 'SKIP' to choose.")
// // if player typed "SKIP", "skip", or "Skip" then skip the shop
// if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
//     // skip the shop and return to the game
// }

// else if (promptFight === "VISIT" || promptFight === "Visit" || promptFight === "visit") {
//     // call shop() function
//     var shopSelection = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
//         if (promptFight === "REFILL" || promptFight === "Refill" || promptFight === "refill") {
//             // refill health
//             // subtract money for purchase
//         } else if (promptFight === "UPGRADE" || promptFight === "Upgrade" || promptFight === "upgrade") {
//             // upgrade attack
//             // subtract money for purchase
//         } else if (promptFight === "LEAVE" || promptFight === "Leave" || promptFight === "leave") {
//             // alert goodbye
//             // leave shop
//         } else {
//             window.alert("Please enter a valid response");
//             // call shop() again
//         }
//     } 
        

// calling the startGame() function to start the game when the page loads
startGame();
>>>>>>> feature/initial-game
