const container = document.querySelector('.container');

const URL = 'http://localhost:4000/todos'

fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((datas)=>{
        console.log(datas.datas);

        for(let data of datas.datas){
            const para = document.createElement('p');
            para.innerText=data;
            container.appendChild(para)
        }
    })