(function (){
    const sizeWindow = document.querySelector("#size");

    function updateWindowSize (){
            const width = window.innerWidth
            const height = window.innerHeight
        sizeWindow.innerHTML = `width-${width}  height-${height}`
    }

    updateWindowSize()

    window.addEventListener("resize", updateWindowSize)
})();