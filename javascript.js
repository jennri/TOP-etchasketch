//Default grid settings, 8x8 grid with peach ink.
populateGrid(8)
let color = "peach"
let click = false;

//
//
//Slider function
//
//
const output = document.getElementById("demo");
const slider = document.getElementById("slider").oninput = function() {
    output.innerHTML = this.value + " x " + this.value; 
    populateGrid(this.value)
}

//
//
//Grid generation
//
//
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
            square.style.backgroundColor = "#fdfcfc";
            square.addEventListener('mouseover', colorSquare)
            gridcontainer.insertAdjacentElement("beforeEnd", square);
         }
} 

//
//
//Toggle Click to paint
//
//
//Toggles the click to true, to be able to paint on the grid or false, to disable it
//Added a visual to know if the cursor is in paint mode or not
document.querySelector(".gridcontainer").addEventListener("click", () => {
    click = !click;
    if (click) {
        document.querySelector(".body").classList.add('paintmode')
    } else {
        document.querySelector(".body").classList.remove('paintmode')
    }
})

//
//
//Buttons and color selection
//
//
//Erase Button
function resetGrid(){ 
    let gridcontainer = document.querySelector(".gridcontainer")
    let squares = gridcontainer.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white");
}
const eraseBtn = document.querySelector(".erase")
eraseBtn.addEventListener("click", resetGrid)

//Removed the onclick bloat on the html files
//Had each button have an eventlistener that removed the active class on all buttons
//And runs changecolor function 
//Tried an forEach() but it didn't work consistently
const colorBtns = document.querySelectorAll(".btncolor")
function removeActive(buttons) {
    buttons.forEach((button) => {
        button.classList.remove('active');   
    })
}

const blackBtn = document.querySelector(".black");
blackBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    blackBtn.classList.add('active');
    changeColor(`hsla(180, 10%, 6%, 1)`)
})
const sunflowerBtn = document.querySelector(".sunflower");
sunflowerBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    sunflowerBtn.classList.add('active');
    changeColor('sunflower')
})
const peachBtn = document.querySelector(".peach");
peachBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    peachBtn.classList.add('active');
    changeColor('peach')
})
const botanicalBtn = document.querySelector(".botanical");
botanicalBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    botanicalBtn.classList.add('active');
    changeColor('botanical')
})
const blackpinkBtn = document.querySelector(".blackpink");
blackpinkBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    blackpinkBtn.classList.add('active');
    changeColor('blackpink')
})
const oceanBtn = document.querySelector(".ocean");
oceanBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    oceanBtn.classList.add('active');
    changeColor('ocean')
})
const nimaBtn = document.querySelector(".nima");
nimaBtn.addEventListener('click', () => {
    removeActive(colorBtns);
    nimaBtn.classList.add('active');
    changeColor('nima')
})
const erasor = document.querySelector(".white");
erasor.addEventListener('click', () => {
    removeActive(colorBtns);
    erasor.classList.add('active');
    changeColor('#fdfcfc')
})



//Selects which colour for the brush
//Color is defaulted to peach and is declared globally
function changeColor(choice) {
    color = choice;
    
}
function colorSquare(){
    if(click && color === 'peach'){
        this.style.backgroundColor = `hsl(${Math.random() * 54}, ${(Math.random() + 0.4) * 100}%, 90%)`;
    } else if (click && color === 'sunflower'){
        this.style.backgroundColor = `hsl(${(Math.random() * 20)+41}, ${(Math.random() + 0.5) * 100}%, ${(Math.random()*20)+55}%)`;
    } else if (click && color === 'ocean'){
        this.style.backgroundColor = `hsl(${(Math.random() * 15) + 214}, ${(Math.random() + 0.2) * 100}%, ${(Math.random()*75)}%)`;
    } else if (click && color === 'nima'){
        this.style.backgroundColor =`hsl(240, 66%, ${(Math.random() * 20) + 68}%)`;
    } else if (click && color === 'blackpink'){
        this.style.backgroundColor = randomBlackPink();
    } else if (click && color ==='botanical'){
        this.style.backgroundColor = randomBotanical();
    } else if (click) {
        this.style.backgroundColor = color;
    }
}

//Choosing a random colour from a palette rather than a color scheme using Math.random
//Yes I am making this more complicated than needed
function randomBlackPink() {
    let options = [`#ff9898`, `#000000`, `#ff7b7b`, `#382d2d`, `#ff5f5f`]
    let position = Math.floor(Math.random() * options.length)
    randomiser = options[position];
    return randomiser;
}
function randomBotanical() {
    let options = [`#dad7cd`, `#a3b18a`, `#588157`, `#3a5a40`, `#344e41`]
    let position = Math.floor(Math.random() * options.length)
    randomiser = options[position];
    return randomiser;
}

