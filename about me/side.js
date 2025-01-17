
let sideBar = document.getElementById("Sidewala");
let toggle = document.getElementById("togggle");


let me = true;
toggle.addEventListener("click", () => {
    if (me == true) {
        sideBar.style.display = "block";
        sideBar.style.width = "300px"
        me = false;
    }
    else {

        sideBar.style.width = "0px"
        me = true;
    }
})


