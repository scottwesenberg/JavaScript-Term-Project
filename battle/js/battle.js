// Define the gifs
const enelHitGif = "media/enel-hit.gif";
const enelWinGif = "media/enel-win.gif";
const luffyDodgeGif = "media/luffy-dodge.gif";
const luffyFinishGif = "media/luffy-finish.gif";
const luffyHitGif = "media/luffy-hit.gif";
const enelBlockGif = "media/enel-block.gif";

//Define scroll down on load effect
$(document).ready(function() {
    $('html, body').animate({scrollTop: $(document).height()}, 'slow');
  });
  
// Define the initial number of lives
let enelLives = 10;
let luffyLives = 10;

// Define a function to update the lives display
function updateLives() {
  $("#enelLives").text("Enel's Lives: " + enelLives);
  $("#luffyLives").text("Luffy's Lives: " + luffyLives);
}

// Define a function to show a gif in the container
function showGif(gif) {
  $("#gif-container").html('<img src="' + gif + '" alt=""style="width: 500px; height: 270px;">');
}

// Define a function to randomly determine if the dodge or punch is successful
function isSuccess() {
  return Math.random() >= 0.5;
}

function enelGone(luffyFinishGif){
    showGif(luffyFinishGif);
    $("#dodge").prop("disabled", true);
    $("#punch").prop("disabled", true);
    $("#enelLives").text("You defeated Enel! You Win!");
}
function luffyGone(enelWinGif){
    showGif(enelWinGif);
    $("#dodge").prop("disabled", true);
    $("#punch").prop("disabled", true);
    $("#luffyLives").text("Luffy's Dead... Again..");
}


// Define a function to handle the player's dodge action
function dodge() {
  if (isSuccess()) {

    showGif(luffyDodgeGif);
    enelLives--;
    updateLives();

    if (enelLives == 0) {
        enelGone(luffyFinishGif)
    }

  } else {

    luffyLives--;
    updateLives();
    showGif(enelHitGif);

    if (luffyLives == 0) {
        luffyGone(enelWinGif)
    }
  }
}

// Define a function to handle the player's punch action
function punch() {
  if (isSuccess()) {

    showGif(luffyHitGif);
    enelLives--;
    updateLives();

    if(enelLives == 0){
        enelGone(luffyFinishGif)
    }

  } else {

    luffyLives--;
    showGif(enelBlockGif);
    updateLives();

    if (luffyLives == 0) {
        luffyGone(enelWinGif)
    }
  }
}

// Add event listeners to the buttons
$("#dodge").click(dodge);
$("#punch").click(punch);
