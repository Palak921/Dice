var n1 = Math.floor(Math.random() * 6) + 1;

var randomimg1 = "dice" + n1 + ".png";

var random1 = "images/" + randomimg1;

var image1 = document.querySelectorAll(".img1")[0];

image1.setAttribute("src", random1);




var n2 = Math.floor(Math.random() * 6) + 1;

var randomimg2 = "dice" + n2 + ".png";

var random2 = "images/" + randomimg2;

var image2 = document.querySelectorAll(".img2")[0];

image2.setAttribute("src", random2);

if(n1>n2){
document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(n1<n2){
document.querySelector("h1").innerHTML="🚩 Player 2 Wins";
}
if(n1==n2){
document.querySelector("h1").innerHTML="Draw!";
}