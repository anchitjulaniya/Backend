const { error } = require('console');
const fs = require('fs');
const path = require('path');
const readline = require('readline');


const taskFilePath = path.join(__dirname, "task.json");

if(!fs.existsSync(taskFilePath)){
    console.log("File does not exist, creating it now");
    
    fs.writeFileSync(taskFilePath,"[]")
}

// console.log(taskFilePath);

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

// rl.question("What is Your Name : ",(input)=>{
//     console.log(`Hello ${input}`);
//     rl.close();
// } )
const getMyTask = ()=>{
    const task = fs.readFileSync("task.json", 'utf-8');
    return JSON.parse(task);
}

const saveMyTask = (tasks)=>{
    fs.writeFileSync(taskFilePath, JSON.stringify(tasks))
}

function addTask(task){
    const tasks = getMyTask();
    tasks.push({
        "discription" : task.trim(),
        "isCompleted" : false
    })
    saveMyTask(tasks);

}
const deleteTask = (task)=>{
    const tasks = getMyTask();
    const updatedTasks = tasks.filter(item => item.discription !== task.trim())
    saveMyTask(updatedTasks);
}

const updateTask = (oldTask, newTask)=>{
    const tasks = getMyTask();
    const index = tasks.findIndex(item => item.discription === oldTask.trim());
    if(index === -1){
        console.log("Wrong task entered. Please enter a correct task!")
        return
    }
    tasks[index] = {
        "discription": newTask.trim(),
        "isCompleted": tasks[index].isCompleted
    };
    saveMyTask(tasks);

}
const listing = ()=>{
    const tasks = getMyTask();
    tasks.forEach((element, index) => {
        console.log(`${index+1. } ${element.discription} - ${element.isCompleted}`)
    });
    console.log("\n");
}
// listing

function taskManager(){
    rl.question("What would you like to do?\n1. Add a Task➕\n2. Delete a Task❌\n3. Display All Tasks📃\n4. Update task📝\n5. Exit📕\n",(answer)=>{
        switch(answer){
            case "1":
                rl.question("Enter Your Task: \n",(task)=>{
                    console.log(`Adding task: ${task}`)
                    addTask(task);
                    taskManager();
                })
                break;

            case "2":
                rl.question("Enter Task to Delete :\n",(task)=>{
                    console.log(`deleting task ${task}`)
                    deleteTask(task);
                    taskManager();
                })    
                break;

            case "3":
                const tasks = getMyTask();
                console.log(`Displaying task ⬇️\n`)
                listing()
                taskManager();
                break;

                case "4":
                    rl.question("Which Task You Want to Update :\n", (oldTask) => {
                        console.log(`Old Task : ${oldTask}`);
                        rl.question("New Task :\n", (newTask) => {
                            console.log(`New Task : ${newTask}`);
                            
                            updateTask(oldTask, newTask);
                            console.log("Task Updated Successfully!\n");
                            taskManager();
                        });
                    });
                    break;
                

            case "5":
                console.log("Exiting the task manager. Goodbye!")
                rl.close();
                break;    

            default:
                console.log("Invalid Input");
                rl.close()
                taskManager();
                    
        }
    });
}

taskManager()



