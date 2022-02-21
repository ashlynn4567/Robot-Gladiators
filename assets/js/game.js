<<<<<<< HEAD
window.alert("This is an alert! JavaScript is running!");

// asking the user to input the robot's name
var playerName = window.prompt ("What is your robot's name?");
//Note the lack of quotation marks around playerName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message.");
// this will do math and log 20
console.log(10+10);
// what is this?
console.log("Our robot's name is " + playerName);

// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

// call the function named "fight"
fight();

=======
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
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    // ask the player if they would like to fight or skip the fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' TO CHOOSE.");

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
    // if player did not enter fight or skip
    } else {
        window.alert("Please enter a valid option. Try again!");
    }
};

// run fight function with for loop to start the game
for(var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
>>>>>>> bf76672f6130cc7b68353c15f8148e254259acec
