// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    //check that event is not null
    if (event != null) {
    //keep page from reloading on submit
        event.preventDefault();
    }

    //set size of squares
    const squareSize = 20;
    //select document elements and set to variables
    const inputColor = document.querySelector('#colorPicker');
    const inputHeight = document.querySelector('#inputHeight');
    const inputWidth = document.querySelector('#inputWidth');
    const pixelCanvas = document.querySelector('#pixelCanvas');

    //removes old table rows when a new ones are created
    pixelCanvas.replaceChildren();
    //set the size of the grid
    pixelCanvas.style.width = (inputWidth.value * squareSize) + 'px';
    pixelCanvas.style.height = (inputHeight.value * squareSize) + 'px'; 

    //loop to create rows and columns
    for (let row = 0; row < inputHeight.value; row++) {
        //create row
        let tr = document.createElement('tr');
        //loop through cells in the row
        for (let column = 0; column < inputWidth.value; column++){
            //create cell
            let td = document.createElement('td');
            //add click event to call changeColor
            td.addEventListener('click', function() { changeColor(td, inputColor.value) });
            //adding cell to the row
            tr.appendChild(td);
        }
        //adding row to the table
        pixelCanvas.appendChild(tr);
    }
}

//changing the bg color of the cell
function changeColor(element, color){
    element.style.backgroundColor = color;
}

//call function to listen for submit event and make the grid
function start() {
    // get the form element
    const form = document.getElementById('sizePicker');
    // add listener to makeGrid when submit is clicked
    form.addEventListener('submit',  makeGrid);
    // call makeGrid
    makeGrid();
}

start();