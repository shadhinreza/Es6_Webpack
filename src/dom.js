//DECIMAL TO BINARY CONVERSIONS



// let val = document.getElementById('binary');
// let btn = document.getElementById('btn1');

// function binary1(){
//     let inp = document.getElementById('inp');
//     if(inp.value === ''){
//         alert('Please input a valid number')
//     }else if(inp.value < 0){
//         alert('Enter a posative number')
//     }else{
//     let inpVal = Number(inp.value).toString(2);
//     val.innerText = inpVal;
//     inp.value = ''
//     }
    
// }
// btn.addEventListener('click', binary1)

//JAVASCRIPT CLOCK MAKING PRACTICE

// function ClockDisplay(){
//     let hours,minutes,seconds,timeFormat,result;
//     let date = new Date();
//     hours = date.getHours();
//     minutes = date.getMinutes();
//     seconds = date.getSeconds();
//     timeFormat = 'AM'
//     if(hours === 0){
//         hours = 12
//     }
//     if(hours > 12){
//         hours = hours - 12
//         timeFormat = 'PM'
//     }
//     hours = hours < 10 ? `0${hours}` : hours;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     result = `${hours}:${minutes}:${seconds}`
//     document.querySelector('#clock').innerHTML = result
//     document.querySelector('small').innerHTML = timeFormat

// }
// setInterval(ClockDisplay,1000);

// let list = document.getElementById('ullist');
// let div =  createElement('div','Hello world', ['text-muted'])
// let li = createElement('li', 'Five',['list-group-item','text-center'])
// list.insertAdjacentElement("afterend", div)
// list.appendChild(li)

// function createElement(tagName, innerHTML,classList){
//     let tag = document.createElement(tagName)
//     tag.innerHTML = innerHTML;
//     tag.classList.add(classList[0])
//     tag.classList.add(classList[1])
//     return tag;
// }

// let firstChild = list.firstElementChild;
// setTimeout(() => {
//    firstChild.innerHTML = firstChild.innerHTML +' '+ '(Modifying)' 
//    firstChild.style.backgroundColor = 'paleGreen'
// },5000);

// setTimeout(() => {
//     list.removeChild(list.lastChild)
// }, 3000);

// let list = document.getElementById('list');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function(e){
//     let lastChild = list.lastElementChild.cloneNode(true);
//     lastChild.innerHTML  = 'Created Item'
//     list.appendChild(lastChild)

// })

// চেকবক্স সিলেক্ট করে রিমুভ/ যোগ করার মাধ্যমে কোথাও প্রদর্শন করা। 
// let inputs = document.getElementsByName('inputs');
// let element = document.getElementById('element');
// let arr = [];

// [...inputs].forEach(lang =>{
//     lang.addEventListener('change',function(e){
//         if(e.target.checked){
//             arr.push(e.target.value)
//             output(element, arr)
//         }else{
//             let ind = arr.indexOf(e.target.value)
//             arr.splice(ind, 1);
//             output(element, arr)
//         }
//     })
// })

// function output(parent, skills){
//     let result = '';
//     skills.forEach((skill, index)=>{
//         result += ` (${index +1}) ${skill} `
//     })
//     return parent.innerHTML = result
// }

// let list = document.getElementById('list');
// list.addEventListener('dblclick',function(event){
//     if(this.contains(event.target)){
//         let inntertext = event.target.innerHTML;
//         event.target.innerHTML = ''
//         let inputbox = inputcreate(inntertext)
//         event.target.appendChild(inputbox)

//         inputbox.addEventListener('keypress',function(e){
//             if(e.key == 'Enter'){
//             event.target.innerHTML = e.target.value
//             }
//         })
//         inputbox.addEventListener('blur',function(e){
//             event.target.innerHTML = e.target.value
//         })
//     }
// })

// function inputcreate(value){
//     let input = document.createElement('input')
//     input.type = 'text'
//     input.className = 'form-group-item'
//     input.value = value
//     return input
// }

// let form = document.getElementById('form');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     let formData = {};
//     [...this.elements].forEach(el =>{ 
//         if(el.type !== 'submit'){
//             formData[el.name] = el.value
//         }
//         this.reset()
//     })
//     console.log(formData)
// })

//ELEMENT CLONE WITH ADD LSIT
// let btn = document.getElementById('btn');
// let list = document.getElementById('list');
// btn.addEventListener('click', function(e){
//     let newElement = list.lastElementChild.cloneNode();
//     newElement.innerHTML = 'newElement'
//     list.appendChild(newElement)

// });
//EVENT DELIGATION
// list.addEventListener('click', function(e){
//     if(this.contains(e.target)){
//         e.target.remove()
//     }
// })

// let name1 = document.getElementById('name')
// let showName = document.getElementById('showName')
// name1.addEventListener('keypress',function(e){
//     if(e.key === 'Enter'){
//         showName.innerHTML = `Your name is '${e.target.value}'`;
//         e.target.value = ''
//     }
// })

// let form = document.getElementById('form');
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let formData = {};
//     let arr = Array.from(this);
//     arr.forEach(el =>{
//        if(el.type !== 'submit'){
//            formData[el.name] = el.value;
//        }
//     })
//     console.log(formData);
//     this.reset()
// })


