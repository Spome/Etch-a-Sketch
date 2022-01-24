
let containerDiv = document.querySelector("#container")

//containerDiv.style.backgroundColor = "red";

let clearButton = document.querySelector("#clearButton");

let size = 64;

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

containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

function clearAll() {
  document.querySelectorAll('.gridDiv').forEach(function(node) {
    node.style.backgroundColor = "white";
  })
}

clearButton.addEventListener('click', clearAll);


