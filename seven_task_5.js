(function (){
    const button = document.querySelector(`.live_button`)
    const someText =  document.querySelector(`.message`)

    button.addEventListener("click", () => {
        const newMessage = document.createElement("div");
        newMessage.innerHTML = "I was pressed!"
        someText.appendChild(newMessage);
    });

    button.addEventListener("mouseover", () => {
        const newMessage = document.createElement("div");
        newMessage.innerHTML = "Mouse on me!"
        someText.appendChild(newMessage);
    });

    button.addEventListener("mouseout", () => {
        const newMessage = document.createElement("div");
        newMessage.innerHTML = "Mouse is not on me"
        someText.appendChild(newMessage);
    });
})()