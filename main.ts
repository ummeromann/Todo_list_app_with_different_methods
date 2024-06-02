import inquirer from "inquirer";
import chalk from "chalk";

let todos:string [] = ["Noman" , "Hammad"];

async function createTodo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
            type: "list",
            name: "Select",
            message: "Select an operation",
            choices: ["Add", "Update", "View", "Delete"]
     });
    
    
     if (ans.Select == "Add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: "Add items in the list",
        });
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
     }
    
    
     if (ans.Select == "Update"){
        let UpdateTodo = await inquirer.prompt({
            type: "list",
            name: "todo",
            message: "Update items in the list",
            choices: todos.map(item => item)
        });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in the list",
        });
        let newTodo = todos.filter(val => val !== UpdateTodo.todo);
        todos = [...newTodo,addTodo.todo];
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
     }
    
    
     if (ans.Select == "View"){
        console.log("*** TO DO LIST ***");
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
        console.log("*******************");
     }
     
     
     if (ans.Select == "Delete"){
        let DeleteTodo = await inquirer.prompt({
            type: "list",
            name: "todo",
            message: "Update items in the list",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== DeleteTodo.todo);
        todos = [...newTodo];
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
     }


    } while(true)


    }
    createTodo(todos);