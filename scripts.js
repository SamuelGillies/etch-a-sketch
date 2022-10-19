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

function gridClear() {
    let clearCont = document.getElementById("container");
    clearCont.innerHTML = '';
};

// set default for startup
gridCreate(64);
container.style.gridTemplateColumns = 'repeat(' + 8 + ', 1fr)';
container.style.gridTemplateRows = 'repeat(' + 8 + ', 1fr)';
let cells = document.querySelectorAll('.cell');                             // obtain nodelist with all items with class .cell
let slider = document.getElementById('slide');

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
    

// instigate a new grid and behaviours when slider value is changed

slider.addEventListener('input', function() {                               // gridgeneration function occurs in event listener so that grid is generated on each change of slider
    gridClear();                                                            // clear grid
    let dim = slider.value;                                                 
    let dimSquare = Math.pow(slider.value, 2);                              // calculate square root of number of cells to derive x and y values of grid. value2 = number of cells generated
    container.style.gridTemplateColumns = 'repeat(' + dim + ', 1fr)';       // recalculate number of rows and columns based on slider value 
    container.style.gridTemplateRows = 'repeat(' + dim + ', 1fr)';
    gridCreate(dimSquare);                                                  // generate grid
    cells = document.querySelectorAll('.cell');                             

    // add/subtract classes as necessary
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

});






