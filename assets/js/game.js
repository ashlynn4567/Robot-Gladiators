// setting up our player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this:
console.log(playerName, playerHealth, playerAttack);

// setting up enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// welcome player to game, alert players they are starting the round
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    
    // ask the player if they would like to fight or skip the fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' TO CHOOSE.");
    // log player response
    console.log(promptFight);

    // if player typed "FIGHT", "fight", or "Fight" then fight
    if (promptFight === "FIGHT" || promptFight === "fight"|| promptFight === "Fight") {
        // remove enemy's health by playerAttack amount
        enemyHealth = enemyHealth - playerAttack;
        // log enemyHealth
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // check the enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by enemyAttack amount
        playerHealth = playerHealth - enemyAttack;
        // log playerHealth
        console.log (
            enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health reamining."
        );

        
        // check the player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player typed "SKIP", "skip", or "Skip" then skip
    } else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
        // confirm player wants to skip the fight. 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
        
        window.alert(playerName + " has lost money for skipping the fight. " + playerName + " now has " + playerMoney + " money left.")
    } else {
        window.alert("Please enter a valid option. Try again!");
    }
};

fight();