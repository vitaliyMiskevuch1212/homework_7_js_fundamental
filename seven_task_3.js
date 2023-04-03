(function (){
    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");
    const link = document.querySelector(".link");

    button1.addEventListener('click', (ev) => {
        document.body.style.backgroundColor = "blue";
    });

    button2.addEventListener('dblclick', (ev) =>{
        document.body.style.backgroundColor = "pink";
    });

    button3.addEventListener('mousedown', (ev) =>{
        document.body.style.backgroundColor = "brown";
    });

    button3.addEventListener('mouseup', (ev) =>{
        document.body.style.backgroundColor = "white";
    });

    link.addEventListener("mouseover", (ev) => {
        document.body.style.backgroundColor = "yellow";
    });

    link.addEventListener("mouseout", (ev) => {
        document.body.style.backgroundColor = "white";
    });
})();