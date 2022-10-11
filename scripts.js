// generate grid inside of container div 

let container = document.getElementById('container'); 

function gridCreate(dim) {
    for (i = 0; i < dim; i++) {
        let cell = document.createElement('div'); 
        cell.className = 'cell'; 
        container.append(cell);
    }
}
let dim = 64; 
gridCreate(dim); 



// define active/inactive classes


// detect click state, add or remove active/inactive class
