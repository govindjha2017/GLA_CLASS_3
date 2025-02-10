const fs = require('fs');
const path = require('path');

let loc1 = path.join(__dirname,'data','input1.txt')
let loc2 = path.join(__dirname,'data','input2.txt')

function fetchData(loc){
    return new Promise((resolve, reject) => {
        fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data);
            }
        })
    })
}

async function output(){
    let data1 = await fetchData(loc1);
    let data2 = await fetchData(loc2);
    // console.log(data1,data2)
    let arr1 = data1.split('\r\n');
    let arr2 = data2.split('\r\n');
    let arr = [...arr1,...arr2];
    
    arr.sort((a,b)=>a-b);

    let finalData = arr.join('\r\n');
    let loc = path.join(__dirname,'data','output.txt');

    fs.writeFile(loc,finalData,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('DONE')
        }
    })
}

output()