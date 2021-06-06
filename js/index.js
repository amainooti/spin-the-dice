function rollDice() {
    // dice one
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // this generates random numbers from 1-6
    var randomDiceImage = "images/" + "dice" + randomNumber1 + ".png"; // concartinates the location of the dice images 
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage); // sets the src to equal the randomDiceImage

    // dice two
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "images/" + "dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImage);

    // game logic
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "player one wins! 🎉";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "player two wins! 🎉";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}