window.setTimeout(function() {

    var todoList = ["First Item"];

    var input = prompt("Hello! What would you like to do?");


    while (input.toLowerCase !== "quit") {

        if (input.toLowerCase === "list") {

            console.log(todoList);
    
        }
    
        else if (input.toLowerCase === "new") {
    
            var newTodo = prompt ("Please enter the new todo.");
            todoList.push(newTodo);

        }

        input = prompt("What would you like to do now?");

    }

    console.log("Alright, you've quit the app.");

}, 500) 