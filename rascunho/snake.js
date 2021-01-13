const snake = document.querySelector('#snake');

let x = 0;
let y = 0;

const right = () => x += 10;
const left = () => x -= 10;
const down = () => y += 10;
const up = () => y -= 10;

document.addEventListener('keydown', function vel(e) {
  if (e.keyCode === 37) {
    left();
    if (x === -40) x = 390
    snake.style.marginLeft = `${x}px`;
  }
  if (e.keyCode === 38) {
    up();
    if (y === -40) y = 390
    snake.style.marginTop = `${y}px`;
  }
  if (e.keyCode === 39) {
    right();
    if (x === 400) x = -30
    snake.style.marginLeft = `${x}px`;
  }
  if (e.keyCode === 40) {
    down();
    if (y === 400) y = -30
    snake.style.marginTop = `${y}px`;
  }
})

