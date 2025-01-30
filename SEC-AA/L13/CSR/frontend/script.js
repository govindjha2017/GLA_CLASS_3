
let url ='http://localhost:5000/todos'
fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((datas)=>{
        console.log(datas)
        const container = document.querySelector('.box');
        for(let data of datas){
            const para = document.createElement('p');
            para.innerText= data;
            container.appendChild(para);
        }
    })