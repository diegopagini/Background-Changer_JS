const $BODY = document.querySelector(".body");
const $BTN = document.querySelector(".btn");

let blue = "blue";
let red = "red";
let yellow = "yellow";
let green = "green";
let black = "black";

function changeColor(){
  if($BODY.style.backgroundColor == red){
    $BODY.style.backgroundColor = blue;
  } else if($BODY.style.backgroundColor == blue){
    $BODY.style.backgroundColor = yellow
  } else if($BODY.style.backgroundColor == yellow){
    $BODY.style.backgroundColor = green
  } else if($BODY.style.backgroundColor == green){
    $BODY.style.backgroundColor = black
  } else {
    $BODY.style.backgroundColor = red
  }
}
