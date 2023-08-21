function showHiddenSearchIcon(){
    var icon = document.getElementById("hidden-icon");
    var searchIcon = document.getElementById("search-icon");

    icon.style.width = "37px";
    icon.style.marginLeft = "-10px";
    searchIcon.style.display = "inline-block";
    searchIcon.style.marginLeft = "10px";

    icon.style.borderColor = "rgb(74, 74, 255)";
}

function hideHiddenSearchIcon(){
    var icon = document.getElementById("hidden-icon");
    var searchIcon = document.getElementById("search-icon");

    icon.style.width = "17px";
    icon.style.marginLeft = "10px";
    searchIcon.style.display = "none";

    icon.style.borderColor = "rgba(92, 92, 92, 0.5)";

}