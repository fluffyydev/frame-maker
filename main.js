const canvas = document.getElementById('theCanvas');
canvas.fillStyle = 'white';

// Function taken from W3Schools - I added scalability
function draw(length, pixelSize) {
    const ctx = document.getElementById('theCanvas').getContext("2d");
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        ctx.fillStyle = `rgb(${Math.floor(255 - (255 / length) * i)} ${Math.floor( 255 - (255 / length) * j,)} 255)`;
        ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
      }
    }
  }

// Adding a scale bar later
draw(10, 10)

function updateScreen() {
    const canvas = document.getElementById('theCanvas');
    const ctx = canvas.getContext("2d");
    // Clearing canvas 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // e
}
