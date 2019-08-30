window.setTimeout(function() {

    var todoList = ["Sample Todo"];

    var input = prompt("What would you like to do?");

    
    while(input !== "quit"){
        //handles the input
        if(input === "list") {
            printTheList();
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("Alright, you've successfully quit the app.");
    
    function printTheList() {
        console.log("----------------");
        todoList.forEach(function(todo, index){
            console.log(index + ": " + todo);
        });
        console.log("*----------------");
    }
    
    function addTodo(){
        //ask for the new todo
        var newTodo = prompt("Please enter the new todo.");
        //add to the todoList array
        todoList.push(newTodo);
        console.log(" ' " + newTodo + "' has been successfully added to the list.")
    }
    
    function deleteTodo(){
        // ask for the index of the deleted todo
        var index = prompt("What's the index of the todo you'd like to delete? ");
        //delete from the todoList array
        todoList.splice(index, 1);
        //confirmation
        console.log("Todo successfully removed.")
    }

}, 500) 