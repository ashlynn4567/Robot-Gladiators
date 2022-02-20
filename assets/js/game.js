// setting up our player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this:
console.log(playerName, playerHealth, playerAttack);

// setting up enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// welcome player to game, alert players they are starting the round
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    // enemyHealth - playerAttack = enemyHealth
    enemyHealth = enemyHealth - playerAttack;

    // enemyHealth log
    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // playerHealth - enemyAttack = playerHeath
    playerHealth = playerHealth - enemyAttack;
    // log playerHealth
    console.log (
        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health reamining."
    );

    // check the enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // check the player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();