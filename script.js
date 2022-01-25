
let containerDiv = document.querySelector("#container")

//containerDiv.style.backgroundColor = "red";

let clearButton = document.querySelector("#clearButton");

let slider = document.querySelector("#slider");
let sliderOutputValue = document.querySelector("#sliderValue");
console.log(slider);

let colorPicker = document.querySelector("#colorPicker");
console.log(colorPicker);

colorPicker.onchange = function() {
  event.target.style.backgroundColor = colorPicker.value;
}


let size = 16;

slider.oninput = function() {
  sliderOutputValue.textContent = `${this.value} x ${this.value}`;
}

slider.onchange = function() {
  size = this.value;
  clearAll();
}


clearButton.addEventListener('click', clearColor);

function createGrid() {
  containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i=1; i <= size; i++) {
    for (let j=1; j <= size; j++) {
      const gridDiv = document.createElement('div')
      gridDiv.style.backgroundColor = "white";
      gridDiv.classList.add("gridDiv");
      gridDiv.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
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

