const body = document.querySelector(".container");

const gridsquare = document.createElement("div");
gridsquare.className = "grid";
body.appendChild(gridsquare);
for (let i = 1;i<16;i++){
    body.appendChild(gridsquare.cloneNode(true));
}

const l = document.querySelectorAll(".grid");

    



