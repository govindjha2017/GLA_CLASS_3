const fs = require('fs');
const path = require('path');

// const loc = path.join(__dirname,'data','abc.txt')
// const data = "this is temp string data";

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file written successfully!')
// })

// const loc1 = path.join(__dirname,'temp.txt')
// const data = "this is temp string data";

// fs.writeFile(loc1,data,(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file written successfully!')
// })

const loc = path.join(__dirname,'data','abc.txt')

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data.toString())
        console.log(data)
    }
})