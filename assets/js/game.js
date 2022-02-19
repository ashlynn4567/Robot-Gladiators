// using a prompt to ask the user for the robot's name
var playerName = window.prompt("What is your robot's name?");
//logging the variable stored in the console for us to see what's going on
console.log(playerName + " is ready for battle!")

// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
} 

// this calls our function "fight" so that it runs on our page.
fight();