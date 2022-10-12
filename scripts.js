// generate grid inside of container div 

let container = document.getElementById('container');   // assign div #container to var container


function gridCreate(dim) {
    for (i = 0; i < dim; i++) {                         // loop through number of cells determined by dim value
        let cell = document.createElement('div');       // create a div for each loop
        cell.className = 'cell noHover';                // assign each div a class of .cell for each loop 
        cell.setAttribute("id", `cell${i}`);
        container.append(cell);                         // append each new div to the div #container for each loop
    }
}; 

let dim = 16;                                           // set number of cells to create
let dimSquare = Math.pow(dim, 2);                           // calculate square root of number of cells to derive x and y values of grid

let slider = document.getElementById('myRange');
slider.oninput = function() {
    dim = slider.value;
  }

console.log(dim);

gridCreate(dimSquare);                                        // run function to create grid

// add/subtract classes as necessary

let cells = document.querySelectorAll('.cell');             // obtain nodelist with all items with class .cell

// hover active 
cells.forEach(cell => cell.addEventListener('mouseenter', function() {      // loop through nodelist using forEach function, adding and removing classes as necessary
    cell.classList.add('hover');
    cell.classList.remove('noHover');
}));

// hover inactive
cells.forEach(cell => cell.addEventListener('mouseout', function() {
    cell.classList.add('noHover');
    cell.classList.remove('hover');
}));

// after click
cells.forEach(cell => cell.addEventListener('click', function() {
    cell.classList.add('clicked');
}));