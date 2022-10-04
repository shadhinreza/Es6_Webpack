//let arr = [2,4,5,9,100];

// function createIterator(collection){
//     let i = 0;
//     return {
//         next(){
//             return{
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// let p = createIterator(arr);
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());

// class Reactangle {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
//     //name = 'Shadhin reza'
//     draw(){console.log(this.name, this.email)}

//     static create(str){
//         let person = JSON.parse(str)
//         return new Reactangle(person.name, person.email)
//         //return person
//     }

// }
// let str = '{"name":"Shadhin", "email":"tarunna147@gmail.com"}'

// let react = new Reactangle(12,10);
// react.draw()
// let p1 = Reactangle.create(str)
// console.log(p1)
// console.log(p1 instanceof(Reactangle))

// function Envato(){
//     this.draw = function(){console.log(this)}

// }

// let p = new Envato()
// let c = p.draw
// c()

// let _name = Symbol()
// let _prof = Symbol()

// class Circle {
//     constructor(name, prof){
//         this[_name] = name
//         this[_prof] = prof
//     }
//     draw(){
//         console.log(this._name)
//     }
// }
// let c1 = new Circle('Shadhin','Web-developer')
// console.log(c1.name)

// function Main(name, prof){
//     this.name = name
//     this.prof = prof
//     this.method = () =>{return this.name}
// }
// let p = new Main('Shadhin','Web');
// let c = p.method
// console.log(c());

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 5000, 'One')
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 2000, 'Two')
// })

// let Obj = {
//     name : 'Javascript',
//     libraries : ['React','Angular','Vue'],
//     shadhin : function(){
//         this.libraries.forEach((elem)=>{
//             console.log(`${this.name} loves ${elem}`)
//         })
//     }
// }

// Obj.shadhin();

// class Student {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     test(){
//         console.log('Hello')
//     }
//     second(){
//         let arr = [1,2,5];

//         arr.find(function(){
//             this.test();
//         },this)
//     }
// }

// let shadhin = new Student('Shadhin',30)
// shadhin.second()

// let a = 1
// let processOrder = () =>{
//     console.log('Processing order for customer 1');
//     setTimeout(()=>{
//         console.log('Cooking completed')
//     },5000);
//     console.log('Order procesed for customer 1')
// };
// console.log('Take order for customer '+a);
// processOrder();
// console.log('Completed order for customer 1')

// let Obj = {
//     name: 'Javascript',
//     estd: '1995',
//     [Symbol('founder')]: 'Brendan Eich',
// };
// // for(let key in Obj){
// //     console.log(key);
// // }
// console.log(Obj);

//ES6 PROMISE ASYNC AWIT FEATURE
// const aPromise = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         if(true){
//             resolve('Genaral data')
//         }else{
//             reject('Rejected data')
//         }
//     }, 5000);
// })

// const promiseHandle = async() => {
// const data = await aPromise;
// console.log(data);
// }
// promiseHandle()

//UNDEFINED COZ 'VAR' IS HOISTING PROBLEM
// var x = 3;
// function rect(randomize){
//     if(randomize){
//         var x = Math.random();
//         return x;
//     }
//     return x;
// }
// console.log(rect(false));

//SYMBOL OBJECT USES OBJECT METHOD AND PROPERTY
// let sym = Symbol();
// let sym2 = Symbol();
// let sym3 = Symbol();
// let Obj = {
//     [sym] : 'Shadhin',
//     age : 30,
//     [sym3]() {
//         return `${this[sym]} age is : ${this.age} `
//     }
// }
// console.log(Obj[sym3]())
// for(let i of Obj){
//     console.log(i)
// }

//KEY VALUE GET USE AN ENTRIES
// function loop(...args){
//     for(const [index, elem] of args.entries()){
//         let messages = `${index} ${elem}`;
//         console.log(messages);
//     }
// }
// loop('Hello','Shadhin')

// let arr = ['a','b','c'];
// let c = arr[Symbol.iterator]();
// while(true){
//     let {done,value} = c.next();
//     if(done) break
//     console.log(value)
// }

// function Main(prefix){
//     this.prefix = prefix;
// }
// Main.prototype.prefixer = function(arr){
//     //let this1 = this;
//     return arr.map(function(x) /*(x) =>*/{
//         console.log(this.prefix + ' '+ x) // ক্লোজার হচ্ছে এখানে ।
//     }.bind(this))
// }
// let p = new Main('Hi');
// p.prefixer(['Shadhin','reza']);

// let x = x => (x % 2) === 0 ? x : 0
// console.log(x(13));

//FOR INTERSECTION
// const as = new Set([1, 2, 3]);
// const bs = new Set([3, 2, 4]);
// const intersection = [...as].filter(bs.has, bs); for es5
//const intersection = [...as].filter(a => bs.has(a)); for es6
// console.log(intersection);

//START OOP CONCEPT WITH ELOQUENT BOOK

//COMPUTED WAY DECLARE OBJECT PROPERTY
// const propKey = 5000;
// const obj = {
//     [propKey]: true,
//     ['b'+'ar']: 123,
//     age : 30
// };
// console.log(obj[5000]);

// for(i in obj){
//     console.log(i)
// }

//OBJECT PROPERTY HIDE
// let a = Symbol(1);
// let b = Symbol(2);
// let obj = {
//     [a] : 'shad',
//     [b] : 'reza',
//     age : 22
// }
// console.log(obj[b]);
// for(i in obj){
//     console.log(i)
// }

//OBJECT ITERABLE
// let obj = {
//     length : 3,
//     0 : 'shadhin',
//     1 : 'reza',
//     2 : '23'
// }
// for(i of Array.from(obj)) console.log(i);

//ম্যাপ ডেটা স্ট্রাকচার কে নরমাল আরে ম্যাপ মেথড ব্যবহার করে আউটপুট বের করা হয়েছে এখানে।
// let map1 = new Map();
// map1.set(1,'a')
// map1.set(2,'b')

// let map2 = new Map(
//     [...map1].map(([key,value]) => [key, value + 'b'])
// )
// console.log(map2);

//INTERSECTION ARRAY WITH SET
// let a = new Set([1,2,3]);
// let b = new Set([2,1,6]);
// let d = [...a].filter(x => b.has(x));
// console.log(d);

//TYPED ARRAY
// let typearray = new Uint8Array([0,1,2]);
// typearray[0] = 100
// typearray[1] = 200
// typearray[2] = 300
// let a = [...typearray]

// let dataView = new DataView(typearray.buffer)
// console.log(dataView.getUint8(2));

//GENERATORS EXPRESSION
// let express = function* (){
//     console.log('Hello key');
//     yield;
//     console.log('Hi')
//     function shadhin(name){
//         console.log(name);
//     }
//     shadhin('Shad')
// }
// let a = express()

// a.next()
// a.next()
// a.next()

//OBJECT ITERATOR USE OBJECT CONSTRUCTOR WITH ENTRIES
// let obj = {
//     name : 'Shad',
//     prof : 'Web-developer',
//     age : 22
// }
//ONLY GET OBJECT KEYS YOU CAN USE IN REFLECT.OWNKEYS
//let a = Reflect.ownKeys(obj)
// let a = Object.entries(obj);
// for(const [k,v] of a) console.log(k,v);

// function a(){
//     console.log(this);
// }
// let b = a.bind({});
// b()

//কাষ্টম ইটারেটর অবজেক্ট এর সাথে।
// let obj = {
//     strat : 1,
//     end : 5,
//     [Symbol.iterator] : function(){
//         let cValue = this.strat;
//         return{
//             next : () =>{
//                 return{
//                     done: cValue > this.end,
//                     value : cValue > this.end ? undefined : cValue++
//                 }
//             }
//         }

//     }
// }
// let aa = obj[Symbol.iterator]();
// console.log(aa.next());
// console.log(aa.next());
// console.log(aa.next());
// console.log(aa.next());

//ES5 CUSTOM ITERATOR USES
// let arr = [2,4,5,7];
// function ITERATOR(collection){
//     let i = 0;
//     return {
//         next(){
//             return {
//                 done : i >= collection.length,
//                 value : collection[i++]
//             }
//         }
//     }
// }
// let p = ITERATOR(arr);
// console.log(p.next());
// let arr = [22,4,55,6,66];
// function* main(collection){
//     for(let i=0;i<collection.length;i++){
//         yield collection[i];
//     }
// }
// let it = main(arr);
// console.log(it.next());

// let Object1 = {
//     name : 'Shadhin',
//     prof : 'Web-developer',
//     dream : 'Software -development',
//     will : 2025
// }
// function* gena(obj){
//     let en = Object.entries(obj);
//     for(const value of en){
//         yield value[1]
//     }
// }
// let itarator1 = gena(Object1);
// console.log([...itarator1])

// for(const elem of itarator1){
//     console.log(elem);
// }

//STATIC METHOD DECLARE IN CLASS
// class Reactangle {
//     constructor(name,email,age){
//         this.name = name
//         this.email = email
//         this.age = age
//     }
//     draw(){
//         console.log('Drawing....')
//     }
//     static create(str){
//         return new Reactangle(str.name, str.email,str.age)
//     }
// }
// let str = {name: "Shadhin reza", email: "tarunna147@gmail.com",age:22}
// let react = Reactangle.create(str)
// console.log(react)

// let a = new WeakMap()
// let b = new WeakMap()
// let c = new WeakMap()
// class Person {
//    constructor(name, prof,age){
//        this.age = age
//        a.set(this,name)
//        b.set(this, prof)
//        c.set(this, ()=>{
//         console.log(this.age, b.get(this))
//     })

//    }
//    get radius(){
//        return a.get(this)
//    }
//    set radius(v){
//        return a.set(this, v)
//    }
//    draw2(){
//        console.log(this.radius)
//        c.get(this)()
//    }

// }
// let p = new Person('Shadhin','Web-dev',22);
// p.radius = 'Shadhinreza'
// p.draw2()

// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//         this.met = function(){
//             console.log(this.name)
//         }
//     }
//     age2(){return this.age}
// }

// class Children extends Person {
//     constructor(name,age,id){
//         super(name,age)
//         this.id = id
//     }

//     met2(){
//         console.log(`name is : ${this.name} age : ${this.age} ID : ${this.id}`)
//     }
//     age2(){
//         return this.name + ' final name overriding...'
//     }
// }
// let pp = new Children('Shadhin',22, 504);
// console.log(pp.age2)

//CALLBACK FUNCTION PRACTICE WITH W3SCHOOLS
// let display = (name, prof) => {
//     console.log(`Name is : ${name} and profession is : ${prof}`);
// }

// let first = (name,prof) =>{
//     display(name, prof)
// }

// let second = (name,prof) =>{
//     display(name, prof)
// }
// first('Shadhin reza','Software Developer')
// second('Aysha Siddika','Web-Developer')

// function number1(num1, num2, callback){
//     let sum = num1 + num2;
//     callback(sum)
// }

// allu = (sum) =>{
//     console.log(sum + 101);
// }

// number1(20,10, allu)

//ASYNCHRONOUS SETtIMEOUT FUNCTION USES CALLBACK
// setTimeout(function(){myfunc('I love you!')}, 3000);
// setTimeout(() => {
//     myfunc2('I love you too');
// }, 4000);

// myfunc = (love) =>{
//     console.log(love);
// }
// myfunc2 = (love2) =>{
//     console.log(love2)
// }

//AJAX CALL
// let xhr = new XMLHttpRequest();
// xhr.open('get','https://jsonplaceholder.typicode.com/users');

// xhr.onreadystatechange = function(){
//   if(xhr.readyState == 4){
//     if(xhr.status == 200){
//       let response = JSON.parse(xhr.response);
//       console.log(response)
//       response.forEach((obj) => {
//         let data = document.querySelector('#dataOutput');
//         data.innerHTML =  `${data.innerHTML} </br> Name : ${obj.name} email : ${obj.email}`
//       })
//     }else{
//       console.log(xhr.status)
//     }
//   }
// }
// xhr.send()

// function requestHtt(url,callback){
//   let xhr = new XMLHttpRequest();
//   xhr.open('get',url);

//   xhr.onreadystatechange = function(){
//   if(xhr.readyState == 4){
//     if(xhr.status == 200){
//       let response = JSON.parse(xhr.response);
//       callback(response,null)
//     }else{
//       callback(null, xhr.status)
//       }
//     }
//   }
//   xhr.send()
// }

// requestHtt('https://jsonplaceholder.typicode.com/users', (res,err)=>{
//   if(res){
//     res.forEach(elem =>{
//       let data = document.getElementById('dataOutput');
//       data.innerHTML = `${data.innerHTML} </br> Name : ${elem.name}`
//     })
//   }else{
//     console.log(err)
//   }
// })

// function getRequest(url){
//     return new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest()
//         xhr.open('get', url)
//         xhr.onreadystatechange = function(e){
//             if(xhr.readyState == 4){
//                 if(xhr.status == 200){
//                 let response = JSON.parse(xhr.response)
//                 resolve(response)
//             }else{
//                 reject(new Error('Error Occured!'))
//             }
//         }
//     }
//         xhr.send()
//     })
// };
// getRequest('https://jsonplaceholder.typicode.com/users')
//     .then(res =>{
//        res.forEach(e =>{
//         console.log(e.name)
//        })
//     })
//     .catch(err =>{
//         console.log(err)
//     })

//ASYNC AWAIT USE CASES
// async function getData() {
//   try {
//     let res = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await res.json();
//     let p = data.map((v) => v.name);
//     console.log(p);
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// getData();

