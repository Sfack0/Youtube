var currButtonSelectedCategories = document.getElementById("initial-categories-button");

function categoryButtonClicked(button){
    
    currButtonSelectedCategories.classList.remove("selected-categories");
    button.classList.add("selected-categories");

    currButtonSelectedCategories = button;
}



function moveButtonsLeft(direction) {
    var buttonsContainer = document.querySelector('.categories');
    var currentMarginLeft = parseInt(buttonsContainer.style.marginLeft) || 0;
    var newMarginLeft;

    var rightShadow = document.getElementById("right-shadow");
    var leftShadow = document.getElementById("left-shadow");
    rightShadow.style.display= 'block';
    leftShadow.style.display= 'block';

    if(direction == 'left')
        newMarginLeft = currentMarginLeft - 300;
    else if(direction =='right')
        newMarginLeft = currentMarginLeft + 300;


    if(newMarginLeft <= -1050){
        newMarginLeft = -1050;
        rightShadow.style.display= 'none';
    }
    

    if(newMarginLeft >= 0){
        newMarginLeft = 0;
        leftShadow.style.display= 'none';
    }

    buttonsContainer.style.marginLeft = newMarginLeft + "px";
  }
  