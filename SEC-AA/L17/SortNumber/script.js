const fs = require('fs')
const path = require('path')

let file1 = path.join(__dirname,'data','input1.txt')
let file2 = path.join(__dirname,'data','input2.txt')

const readfilecontent = (filePath)=>{
    return new Promise((res,rej)=>{
        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                console.log("Error")
            }
            else{
                res(data.split('\r\n'))
            }
        })

    })
}


async function output(){
    let data1 = await readfilecontent(file1);
    let data2 = await readfilecontent(file2);
    let finalArr = [...data1,...data2];
    let outputData = finalArr.sort((a,b)=> a-b);
    let loc = path.join(__dirname,'data','output.txt')
   let p =  outputData.join('\r\n')
    fs.writeFile(loc,p,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file written succesfully')
    })
}

output()