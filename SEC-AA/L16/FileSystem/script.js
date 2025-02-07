const fs = require('fs');
const path = require('path');

let data = "this is temp string data"

let loc = path.join(__dirname,'data','file1.txt')

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file writen successfully')
// })

// let loc1 = path.join(__dirname,'file1.txt')
// fs.writeFile(loc1,data,(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file writen successfully')
// })

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        // console.log(data.toString())
        console.log(data)
    }
})