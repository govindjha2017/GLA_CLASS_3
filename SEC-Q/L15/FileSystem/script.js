const fs = require('fs');
const path = require('path');
// let loc = path.join(__dirname,'data','abc.txt') 
// let data = "this is temp string data";

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file written successfully !')
// })

// let loc1 = path.join(__dirname,'abc.txt') 
// let data = "this is temp string data";

// fs.writeFile(loc1,data,(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file written successfully !')
// })

let loc = path.join(__dirname,'data','abc.txt') 

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        // console.log(data.toString())
        console.log(data)
    }
})