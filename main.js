const canvas = document.getElementById('theCanvas');
canvas.fillStyle = 'white';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sliders and Buttons
var redHueSelector = document.getElementById("RDirection");
var greenHueSelector = document.getElementById("GDirection");
var blueHueSelector = document.getElementById("BDirection");

var rSlider = document.getElementById("rRange");
var gSlider = document.getElementById("gRange");
var bSlider = document.getElementById("bRange");

var pixelSizeSlider = document.getElementById("pixelSizeRange");
var pixelAmountSlider = document.getElementById("pixelAmountRange");
var pixelAmountSlider2 = document.getElementById("pixelAmountRange2");

var randomFrameButton = document.getElementById("randomButton");

// Function taken from W3Schools - I added scalability
function draw(length, pixelSize) {
    var length2 = pixelAmountSlider2.value;
    const ctx = document.getElementById('theCanvas').getContext("2d");
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length2; j++) {
        var rNum = 0;
        var gNum = 255;
        var bNum = 255;
        if (redHueSelector.value == "left") {
          rSlider.hidden = true;
          rNum = Math.floor(255 - (255 / length) * j);
        } else if (redHueSelector.value == "down") {
          rSlider.hidden = true;
          rNum = Math.floor(255 - (255 / length) * i);
        } else {
          rSlider.hidden = false;
          rNum = rSlider.value;
        }

        if (greenHueSelector.value == "left") {
          gSlider.hidden = true;
          gNum = Math.floor(255 - (255 / length) * j);
        } else if (greenHueSelector.value == "down") {
          gSlider.hidden = true;
          gNum = Math.floor(255 - (255 / length) * i);
        } else {
          gSlider.hidden = false;
          gNum = gSlider.value;
        }
          
        if (blueHueSelector.value == "left") {
          bSlider.hidden = true;
          bNum = Math.floor(255 - (255 / length) * j);
        } else if (blueHueSelector.value == "down") {
          bSlider.hidden = true;
          bNum = Math.floor(255 - (255 / length) * i);
        } else {
          bSlider.hidden = false;
          bNum = bSlider.value;
        }
        
        // Saving this for later:  Math.floor( 255 - (255 / length)
        var rbgColor = "rgb(" + rNum + ", " + gNum + ", " + bNum + ")";
        
        ctx.fillStyle = rbgColor;
        
        ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
      }
    }
  }


function updateScreen() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = pixelAmountSlider2.value * pixelSizeSlider.value;
  canvas.height = pixelAmountSlider.value * pixelSizeSlider.value;

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

draw(pixelAmountSlider.value, pixelSizeSlider.value);


rSlider.oninput = function() {
  updateScreen()
}

gSlider.oninput = function() {
  updateScreen()
}

bSlider.oninput = function() {
  updateScreen()
}

pixelSizeSlider.oninput = function() {
  updateScreen()
}

pixelAmountSlider.oninput = function() {
  updateScreen()
}

pixelAmountSlider2.oninput = function() {
  updateScreen()
}

redHueSelector.oninput = function() {
  updateScreen()
}

greenHueSelector.oninput = function() {
  updateScreen()
}

blueHueSelector.oninput = function() {
  updateScreen()
}

// Thanks to goggle AI
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomFrameButton.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (getRandomInteger(1, 2) == 1) {
    var colorUsed = getRandomInteger(1, 3)
    if (colorUsed == 1) {
      
    }
  }

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}
