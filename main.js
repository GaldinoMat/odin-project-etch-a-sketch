const game = document.querySelector(".game-canvas");

const sizePicker = document.getElementById("grid-size");
const submitGrid = document.getElementById("submit-grid-size");

function createGrid(rows, cols) {
  game.style.setProperty("--grid-rows", rows);
  game.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    const span = document.createElement("span");
    game.appendChild(span).classList.add("grid-item");
    span.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = rgb_picker();
    });
  }
}

submitGrid.addEventListener("click", () => {
  resetGrid();
});

function resetGrid() {
  const boxes = document.querySelectorAll(".grid-item");
  boxes.forEach((box) => box.remove());

  const gridValue = sizePicker.value;

  if (isNaN(gridValue) || gridValue < 2 || gridValue > 64) {
    alert("Please, use a number between 2 adn 64 to determine the grid values");
    sizePicker.value = "";
  }

  gridValue >= 2 && gridValue <= 64
    ? createGrid(gridValue, gridValue)
    : createGrid(16, 16);
}

function rgb_picker() {
  return document.getElementById("color").value;
}

createGrid(16, 16);