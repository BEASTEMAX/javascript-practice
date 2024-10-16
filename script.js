// //getElementById  A

// // access html elements
// let p= document.getElementById('intro');

// //manipulating html elements
// p.textContent = 'code,eat and repeat'
// console.log(p.textContent);

// let changeColor = document.getElementById('changeTextBtn');

// changeColor.style.backgroundColor = 'crimson';
// changeColor.style.color = 'black';
// //queryselector()
// let p2 = document.querySelector('p');
// p2.textContent = 'I love javascript and mancity';

// console.log(p2.textContent);

// //eventlistener
// changeColor.addEventListener('click',() => {
//     colorPara.style.color='blue';
// })

let mainContent=document.querySelector('.main-content')
//mainContent.classList.remove('mainContent');
let fName = document.querySelector('.fName')
fName.value = 'John';

let itemList = document.querySelector('#itemList');
let addItem = document.querySelector('#addItemBtn');

addItem.addEventListener('click',()=>{
    let newBtn=document.createElement('li');
    newBtn.textContent=`Item ${itemList.children.length + 1}`
    itemList.appendChild(newBtn);
})