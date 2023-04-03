(function (){
    const deleteList = document.querySelector("#delete_button");
    const selectList = document.querySelector("#select");

    deleteList.addEventListener("click", (ev)=>{
        const listOption = selectList.selectedIndex
        selectList.remove(listOption);
    });
})();