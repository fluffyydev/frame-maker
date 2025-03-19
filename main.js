const canvas = document.getElementById('theCanvas');
canvas.fillStyle = 'white';

// Sliders and Buttons
var redHueSelector = document.getElementById("RDirection")
var greenHueSelector = document.getElementById("gDirection")
var blueHueSelector = document.getElementById("RDirection")

var rSlider = document.getElementById("rRange")
var gSlider = document.getElementById("gRange")
var bSlider = document.getElementById("bRange")

var pixelSizeSlider = document.getElementById("pixelSizeRange")
var pixelAmountSlider = document.getElementById("pixelAmountRange")


// Function taken from W3Schools - I added scalability
function draw(length, pixelSize) {
    const ctx = document.getElementById('theCanvas').getContext("2d");
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        var rNum = 255;
        var gNum = 255;
        var bNum = 255;
        if (redHueSelector.value == "left") {
          rNum = Math.floor(255 - (255 / length) * j)
        } else if (redHueSelector.value == "down") {
          rNum = Math.floor(255 - (255 / length) * i)
        } else {
          rNum = rSlider.value;
        }

        if (greenHueSelector.value == "left") {
          gNum = Math.floor(255 - (255 / length) * j)
        } else if (greenHueSelector.value == "down") {
          gNum = Math.floor(255 - (255 / length) * i)
        } else {
          gNum = gSlider.value;
        }
          
        if (blueHueSelector.value == "left") {
          bNum = Math.floor(255 - (255 / length) * j)
        } else if (blueHueSelector.value == "down") {
          bNum = Math.floor(255 - (255 / length) * i)
        } else {
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

  draw(100, 1);
}

// Adding a scale bar later
draw(pixelAmountSlider.value, pixelSizeSlider.value);


rSlider.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

gSlider.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

pixelSizeSlider.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

pixelAmountSlider.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

redHueSelector.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

greeneHueSelector.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}

blueHueSelector.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(pixelAmountSlider.value, pixelSizeSlider.value);
}
