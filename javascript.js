
populateGrid(16)
let color = "black"



//Slider Function
const output = document.getElementById("demo");
const slider = document.getElementById("slider").oninput = function() {
    output.innerHTML = this.value + " x " + this.value; 
    console.log(sliderValue)
    populateGrid(this.value)
}

//Erase Button
    const eraseBtn = document.querySelector(".erase")
    let sliderValue = document.getElementById("slider").oninput.value;

    //Fix reset button


    // eraseBtn.addEventListener('click', populateGrid(size));
    
    

//When populateGrid() is run, all the squares are removed and repopulated
//This removes any drawing on the previous grid
function populateGrid(size) {
    //Default settings on the page
    const gridcontainer = document.querySelector(".gridcontainer")
    //We want to select all the divs (div not .div) within the gridcontainer 
    const squares = gridcontainer.querySelectorAll("div")
    squares.forEach((div) => div.remove());
    gridcontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //Amount is used as we want to maintain a square grid
    let amount = size * size;
        for (let i=0; i<amount; i++){
            let square = document.createElement("div")
            square.style.backgroundColor = "white";
            square.addEventListener('mouseover', colorSquare)
            gridcontainer.insertAdjacentElement("beforeEnd", square);
         }
} 



function colorSquare(){
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}