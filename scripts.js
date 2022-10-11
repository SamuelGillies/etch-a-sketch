// generate grid inside of container div 

let container = document.getElementById('container');   // assign div #container to var container

function gridCreate(dim) {
    for (i = 0; i < dim; i++) {                         // loop through number of cells determined by dim value
        let cell = document.createElement('div');       // create a div for each loop
        cell.className = 'cell';                        // assign each div a class of .cell for each loop 
        container.append(cell);                         // append each new div to the div #container for each loop
    }
}

let dim = 64;                                           // set number of cells to create
let dimRoot = Math.sqrt(dim);                           // calculate square root of number of cells to derive x and y values of grid
gridCreate(dim);                                        // run function to create grid



// resize grid-template-columns/rows based on dim size




// define active/inactive classes




// detect click state, add or remove active/inactive class

container.addEventListener('mouseover', hover());
