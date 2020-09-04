var character = document.getElementById("character");
var block = document.getElementById("block");



function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate"); ;
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500) ;
}

var checkdead = setInterval(function () {
  var charactertop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if(blockleft<55 && blockleft>0 && charactertop>=130){
      block.style.animation = "none";
      block.style.display = "none";
      alert("Not Fast Enough")
      alert("Refresh the page to try again")
  }
  return true;
},10);



var score = 0
score++
 


console.log(score)

score++

console.log(score)





//to score the player I need to check to see if the player has jumped over the bomb successfully
// need to check and see if the player isnt dead
//







