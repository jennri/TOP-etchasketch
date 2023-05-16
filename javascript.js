//Default grid settings, 16x16 grid with black ink.
populateGrid(16)
let color = "`hsla(180, 10%, 6%, 1)`"


//Ideas
//Bigger paint brush/ eraser
//Going over the same tile over and over darkens it


//Slider Function
const output = document.getElementById("demo");
const slider = document.getElementById("slider").oninput = function() {
    output.innerHTML = this.value + " x " + this.value; 
    populateGrid(this.value)
}

//Erase Button
function resetGrid(){
    let gridcontainer = document.querySelector(".gridcontainer")
    let squares = gridcontainer.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white");
}
const eraseBtn = document.querySelector(".erase")
eraseBtn.addEventListener("click", resetGrid)

//When populateGrid() is run, all the squares are removed and repopulated
//This removes any drawing on the previous grid
function populateGrid(size) {
    //Default settings on the page
    let gridcontainer = document.querySelector(".gridcontainer")
    //We want to select all the divs (div not .div) within the gridcontainer 
    let squares = gridcontainer.querySelectorAll("div")
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

//Selects which colour for the brush
//Color is defaulted to black and is declared globally
//The buttons change the colors via changeColor()
function colorSquare(){
    if(color === 'peach'){
        //Math.random() gives a number between 0.1 to 1
        //Color palattes are possible given their hsl numbers are consecutive
        //Red - Yellow hsl1-54, green to dark green 72-133, blues 176-233, purples 258-330
        this.style.backgroundColor = 
        `hsl(${Math.random() * 54}, ${(Math.random() + 0.4) * 100 }%, 90%)`;
    } else if (color === 'patty'){
        this.style.backgroundColor = 
        `hsl(${(Math.random() * 15) + 214}, ${(Math.random() + 0.2) * 100}%, ${(Math.random() * 75)}%)`;
    } else if (color === 'nima'){
        this.style.backgroundColor =
        `hsl(240, 66%, ${(Math.random() * 20) + 68}%)`;
    } else if (color === 'blackpink'){
        this.style.backgroundColor =
        randomBlackPink();
    } else {
        this.style.backgroundColor = color;
    }
}

//Choosing a random colour from a palette rather than a color scheme using Math.random
//Yes I am making this more complicated than needed
function randomBlackPink() {
    const options = [`#ff9898`, `#000000`, `#ff7b7b`, `#382d2d`, `#ff5f5f`]
    let position = Math.floor(Math.random() * options.length)
    randomiser = options[position];
    console.log(randomiser);
    return randomiser;
}

function changeColor(choice) {
    color = choice;
}