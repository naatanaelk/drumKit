//main function side
//loop for assigning event listener to each button clicked
for (var n = 0; n < document.querySelectorAll(".drum").length; n++) {
    
    document.querySelectorAll(".drum")[n].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        addSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
}
//loop for assigning event listener to each keypressed
document.addEventListener('keydown', function(event){
    addSound(event.key);
    buttonAnimation(event.key);
});

//*
//*
//support function side

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}

function addSound(currentState){
    switch (currentState) {
        case "w":
            //Audio() is a constructor function, see there are new infront of it
            var audio = new Audio('js/sounds/tom-1.mp3');
            //.play() is a function inside the Audio constructor function
            audio.play();
            break;
        case "a":
            var audio = new Audio('js/sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('js/sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('js/sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('js/sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('js/sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('js/sounds/snare.mp3');
            audio.play();
            break;

        default:
            break;
    }
}
