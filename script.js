const container = document.querySelector(".container")
const grid = document.createElement("div")
grid.classList.add("grid")

function createGrid(num){
    for (let i = 0;i<num;i++){
        const clone = grid.cloneNode(true);
        container.appendChild(clone)
    }
    
}

createGrid(10)
