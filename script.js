const body = document.querySelector(".container");

const gridsquare = document.createElement("div");
gridsquare.className = "grid";
body.appendChild(gridsquare);

for (let i = 1;i<256;i++){
    body.appendChild(gridsquare.cloneNode(true));
}

const l = document.querySelectorAll(".grid");
l.forEach((l) => {
    l.addEventListener("mouseover",function (e) {
        e.target.style.background = "blue";
    })
})

const button = document.querySelector("button");
let numSquare;
button.addEventListener("click", () => {
    numSquare = parseInt(prompt("Enter number of squares per side for new grid"));
    if(numSquare>100){
        alert("Please enter value less than 100");
        return;
    }
    while(body.firstChild){
        body.removeChild(body.firstChild);
    }

    for(let i = 0;i<numSquare;i++){
        body.appendChild(gridsquare.cloneNode(true));
    }

    const l = document.querySelectorAll(".grid");
    l.forEach((l) => {
    l.addEventListener("mouseover",function (e) {
        e.target.style.background = "blue";
    })
})
    console.log(numSquare);

})

    



