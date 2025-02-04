const container = document.querySelector('.container')

// fetch('http://localhost:4000/todos')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((datas)=>{
//         console.log(datas.todos)

//         for(let data of datas.todos){
//             const para = document.createElement('p');
//             para.innerText= data;

//             container.appendChild(para)
//         }
//     })



async function fetchData(){
    let res = await axios.get('http://localhost:4000/todos');
    console.log(res)
    console.log(res.data.todos)
    for(let data of res.data.todos){
        const para = document.createElement('p');
        para.innerText= data;
        const btn = document.createElement('button');
        btn.innerText="remove";
        btn.classList.add('btn')

        const div = document.createElement('div');
        div.style.display='flex';
      
        div.appendChild(para);
        div.appendChild(btn);
        container.appendChild(div)
    }
}
fetchData()


const form = document.querySelector('form');

form.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const data = document.getElementById('inp').value;
    let res = await axios.post('http://localhost:4000/abc',{data});
    
    console.log(res);
    container.innerHTML=""
    fetchData()
    inp.value =""
})


 