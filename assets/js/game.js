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

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// *********************Game States*********************
// "WIN" - Player robot has defeated all enemy robots.
// "LOSE" - Player robot's health is zero or less. 
// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is still alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask the player if they would like to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' TO CHOOSE.");

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

// fight each enemy robot by looping over them and fighting them one at a time
for(var i=0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {

    // let player know waht round they are in, remember that arrays start at 0 so it needs to be +1
    window.alert("welcome to Robot Gladiators! Begin Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset next enemyHealth before starting a new fight
    enemyHealth = 50;

    // use debugger to pause script from running to check what's going on at that particular round
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the value of the enemyName parameter
    fight(pickedEnemyName);
    
    // if player isn't alive, stop the game
    } else {
        window.alert("You ahve lost your robot in battle! Game Over!");
        break;
    }
}
