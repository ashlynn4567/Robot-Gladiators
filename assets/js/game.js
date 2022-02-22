// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// fight function
var fight = function(enemy) {
    // repeat and execute as long as the enemy robot is still alive
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask the player if they would like to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player typed "SKIP", "skip", or "Skip" then skip the fight
        if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
            // confirm player wants to skip the fight. 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert (playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                // log playerInfo.money
                console.log(playerInfo.name + " now has " + playerInfo.money + " money remaining.");
                break;
            }
        }

        // if player did not type "SKIP", "Skip", or "skip", then fight
        // player attacks - remove enemy's health by random number based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        
        // log enemy.health
        console.log (
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
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

        // enemy robot attacks - remove player's health by enemy.attack amount, ensuring it doesn't return a negative
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // log playerInfo.health
        console.log (
            enemy.name + " attacked " + playerInfo.name + "." + playerInfo.name + " now has " + playerInfo.health + " health reamining."
        );
        
        // did the player die? check the player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

// setting up our player variables
var playerInfo ={
    name: window.prompt("What is your robot's name?"),
    health: 100, 
    attack: 10, 
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
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

// expressing the startGame() function to start a new game
var startGame = function() {
    // reset player stats for every playthrough
    playerInfo.reset();
    
    // fight each enemy robot by looping over them and fighting them one at a time
    for(var i=0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to be +1
            window.alert("Welcome to Robot Gladiators! Begin Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemy.name array
            var pickedEnemyObj = enemyInfo[i];

            // reset next enemy.health before starting a new fight
            pickedEnemyObj = randomNumber(40, 60);

            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                // ask if the player wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over. Do you want to visit the store before the next round?")
                
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
    // after the loop ends, player is either out of health or enemies to fight, so run endGame() function
    endGame();
};

// endgame() function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if the player is still alive, the player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // use switch to carry out action
    switch (shopOptionPrompt) {
        // refill
        case "REFILL":
        case "Refill":
        case "refill":
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
        
        // upgrade
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
            
        // leave
        case "LEAVE":
        case "Leave":
        case "leave":
            window.alert("Leaving the store.");
            // leave the store by breaking the function
            break;
        
        // any other option
        default: 
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
        
// calling the startGame() function to start the game when the page loads
startGame();
