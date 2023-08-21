var currButtonSelectedSidebar = document.getElementById("initial-sidebar-button");

function sidebarButtonClicked(button){
    currButtonSelectedSidebar.classList.remove("selected-sidebar");
    button.classList.add("selected-sidebar");

    currButtonSelectedSidebar = button;

    
}


rotation = 180;
function showMoreClicked() {
    var hidden = document.getElementsByClassName("hidden");
    var arrow = document.getElementById("arrow");

    var display = window.getComputedStyle(hidden[0]).getPropertyValue('display');

    if (display === "none")
        for (var i = 0; i < hidden.length; i++)
            hidden[i].style.display = "flex";
    else 
        for (var i = 0; i < hidden.length; i++)
            hidden[i].style.display = "none";
    

    arrow.style.transform = "rotate(" + rotation + "deg)";
    rotation += 180;
}
