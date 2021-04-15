// Function for checking tap

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;

        forKeyChecking(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Function for checking button type

document.addEventListener("keydown", function(event) {

    forKeyChecking(event.key);
    buttonAnimation(event.key);
});

// Function for checking key/button press

function forKeyChecking(key_value) {
    switch (key_value) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}