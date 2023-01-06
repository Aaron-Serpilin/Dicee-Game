//Generation and Assignment of the random numbers, random images, and random image sources
let firstRandomNumber = Math.floor(Math.random() * 6) + 1; 
let firstRandomDiceImage = "dice" + firstRandomNumber + ".png"; 
let randomImageSource = "images/" + firstRandomDiceImage; 

let firstRandomImage = document.querySelectorAll("img")[0];

firstRandomImage.setAttribute("src", randomImageSource);

let secondRandomNumber = Math.floor(Math.random() * 6) + 1;
let secondRandomDiceImage = "dice" + secondRandomNumber + ".png";
let secondRandomImageSource = "images/" + secondRandomDiceImage;

document.querySelectorAll("img")[1].setAttribute("src", secondRandomImageSource);

//Game Behavior
if (firstRandomNumber > secondRandomNumber) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


