// generate grid inside of container div 

let container = document.getElementById('container'); 

for (i=0; i<16; i++) {
    let cell = document.createElement('div'); 
    cell.className = 'cell'; 
    container.append(cell);
}

// define active/inactive classes


// detect click state, add or remove active/inactive class
