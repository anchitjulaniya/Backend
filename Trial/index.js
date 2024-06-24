// we will creating a task/todo manager
// we are storing our tasksin jsonformate in a file

// we will be using the fs module for read and write
const { error } = require('console');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const childProcess = require('child_process');

// const wifi = require('node-wifi');

// const currentLocation = __dirname;
// const tasksFilePath = path.join()


const writeFile = ()=>{
    // write operation
    fs.writeFile("task.txt","Hello",(error)=>{
        if(error){
            console.log(error)
            return;
        }
        console.log("File Successfully Written")
    });
}
// writeFile();

const readingFile = ()=>{
    // read operation
    fs.readFile("task.txt",(error, data)=>{
        if(error){
            console.log("reading error => ", error)
            return;
        }
        console.log("File Data", data.toString())
    })
}

readingFile();

const appendFileDemo = (filename , content)=>{
    fs.appendFile(filename, "\n"+content,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("Data appended Successfully");
    })
}
appendFileDemo("task.txt", "This is line 2.\n")

const deleteFile = () => {
    fs.unlink("task.txt",(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("File deleted Successfully");

    })
}
deleteFile();


const createFolder = ()=>{
    fs.mkdir
}





/**
 * fs.rmdir(); // Delte a folder
 * fs.mkdir(); // Create a folder
 * fs.access(); // Check if a file exists
 */