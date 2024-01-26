var randomNumber1 = Math.ceil((Math.random() * 6));
var randomNumber2 = Math.ceil((Math.random() * 6));

if(randomNumber1 === 1){
    var p1 = document.querySelector(".img1");
    p1.setAttribute("src", "./images/dice1.png");
} else if(randomNumber1 === 2){
    var p2 = document.querySelector(".img1");
    p2.setAttribute("src", "./images/dice2.png");
} else if(randomNumber1 === 3){
    var p3 = document.querySelector(".img1");
    p3.setAttribute("src", "./images/dice3.png");
} else if(randomNumber1 === 4){
    var p4 = document.querySelector(".img1");
    p4.setAttribute("src", "./images/dice4.png");
} else if(randomNumber1 === 5){
    var p5 = document.querySelector(".img1");
    p5.setAttribute("src", "./images/dice5.png");
} else{
    var p6 = document.querySelector(".img1");
    p6.setAttribute("src", "./images/dice6.png");
}

if(randomNumber2 === 1){
    var p1 = document.querySelector(".img2");
    p1.setAttribute("src", "./images/dice1.png");
} else if(randomNumber2 === 2){
    var p2 = document.querySelector(".img2");
    p2.setAttribute("src", "./images/dice2.png");
} else if(randomNumber2 === 3){
    var p3 = document.querySelector(".img2");
    p3.setAttribute("src", "./images/dice3.png");
} else if(randomNumber2 === 4){
    var p4 = document.querySelector(".img2");
    p4.setAttribute("src", "./images/dice4.png");
} else if(randomNumber2 === 5){
    var p5 = document.querySelector(".img2");
    p5.setAttribute("src", "./images/dice5.png");
} else{
    var p6 = document.querySelector(".img2");
    p6.setAttribute("src", "./images/dice6.png");
}

var cont = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    cont.textContent = "🎉 Player 1 Wins! ";
} else if(randomNumber1 < randomNumber2){
    cont.textContent = "Player 2 Wins! 🎉";
} else if(randomNumber1 === randomNumber2){
    cont.textContent = "Draw!";
} else {
    cont.textContent = "Something went wrong";
}