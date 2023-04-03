(function (){
    function changeCSS() {
        let button = document.querySelector(".button");
        let textElement = document.querySelector(".text");

        button.addEventListener("click", function () {
            textElement.style.color = "orange";
            textElement.style.fontSize = "20px";
            textElement.style.fontFamily = "Comic Sans MS";
        });
    }

    changeCSS();

})();