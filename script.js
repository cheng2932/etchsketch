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

/* l.forEach((l) => {
    l.addEventListener("mouseleave",function (e) {
        e.target.style.background = "black";
    })
}) */
    



