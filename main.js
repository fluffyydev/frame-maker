const canvas = document.getElementById('theCanvas');
canvas.fillStyle = 'white';

// Sliders and Buttons
var rSlider = document.getElementById("rRange")
var cSlider = document.getElementById("cRange")

// Function taken from W3Schools - I added scalability
function draw(length, pixelSize) {
    const ctx = document.getElementById('theCanvas').getContext("2d");
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        var rNum = 255;
        var bNum = 255;
        var cNum = 255;
        ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
        if (true) {
          rNum = rSlider.value;
        }
        if (true) {
          bNum = rSlider.value;
        }
        if (true) {
          cNum = rSlider.value;
        }
        // Saving this for later:  Math.floor( 255 - (255 / length)
        var rbgColor = "rgb(" + rNum + ", " + bNum + ", " + Math.floor( 255 - (255 / length) * i) + ")";
        ctx.fillStyle = rbgColor;
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
draw(250, 1);


rSlider.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(250, 1);
}

bSlider.oninput = function() {
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  // Clearing canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw(250, 1);
}
