window.onload = function(){
    var answer = prompt("Are we there yet?");

    while (answer !== "yes" && answer !== "yeah") {
        var answer = prompt ("Are we there yet?");
    }

    alert ("Oh look! We made it! Yay!")

}

