
let containerDiv = document.querySelector("#container")

//containerDiv.style.backgroundColor = "red";

let clearButton = document.querySelector("#clearButton");

let eraserButton = document.querySelector("#eraserButton");

let slider = document.querySelector("#slider");
let sliderOutputValue = document.querySelector("#sliderValue");

let colorPicker = document.querySelector("#colorPicker");

let colorValue = "#000000"

let size = 16;

colorPicker.onchange = function() {
  colorValue = colorPicker.value;
}

slider.oninput = function() {
  sliderOutputValue.textContent = `${this.value} x ${this.value}`;
}

slider.onchange = function() {
  size = this.value;
  clearAll();
}

clearButton.addEventListener('click', clearColor);
eraserButton.addEventListener('click', function() {
  colorValue = "#ffffff"
})

function createGrid() {
  containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i=1; i <= size; i++) {
    for (let j=1; j <= size; j++) {
      const gridDiv = document.createElement('div')
      gridDiv.style.backgroundColor = "white";
      gridDiv.classList.add("gridDiv");
      gridDiv.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = colorValue;
      });

      containerDiv.appendChild(gridDiv);
    }
  }
}

function removeGrid() {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
}

function clearColor() {
  document.querySelectorAll('.gridDiv').forEach(function(node) {
    node.style.backgroundColor = "white";
  })
}


function clearAll() {
  clearColor();
  removeGrid();
  createGrid();
}


createGrid();

