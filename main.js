const canvas = document.getElementById('theCanvas');
const ctx = canvas.getContext('2d');

canvas.fillStyle = 'white';

context.font = '20px Arial';
context.fillStyle = 'green';
context.fillText('helo', 50, 300);

// Function taken from W3Schools .. I added scalability
function draw(length) {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            ctx.fillStyle = `rgb(${Math.floor(255 - (255 / length) * i)} ${Math.floor( 255 - (255 / length) * j,)} 255)`;
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}

// Adding a scale bar later
draw(50)
