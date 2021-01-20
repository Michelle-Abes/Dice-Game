var randomNumber1 = Math.floor(Math.random() * 6) + 1;

randomImage1Source = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
image1src = document.querySelector(".img1"); // sourceof the existing image
image1src.setAttribute("src", randomImage1Source); // rolling the dice




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImage2Source = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
image2src = document.querySelector(".img2"); // sourceof the existing image
image2src.setAttribute("src", randomImage2Source); // rolling the dice




if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
