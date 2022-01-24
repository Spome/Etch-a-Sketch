let containerDiv = document.querySelector("#container")

//containerDiv.style.backgroundColor = "red";

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click', () => {

});

for (let i=1; i<=16; i++) {
  for (let j=1; j<=16; j++) {
    const gridDiv = document.createElement('div')
    gridDiv.style.border = "1px solid black";
    gridDiv.style.backgroundColor = "blue";
    gridDiv.textContent = "test"
    gridDiv.classList.add("gridDiv")
    gridDiv.addEventListener("mouseover", function(event) {
      event.target.style.backgroundColor = "orange";
    });

    containerDiv.appendChild(gridDiv);
  }
}

