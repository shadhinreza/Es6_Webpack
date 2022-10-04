//callback function how to work here..
function sayname(name,age){
    return 'Hello'+' ' + name+' '+age;
}
function wow(name2,age,fun){
    return fun(name2,age);
}
function ami(name,age){
    return 'Hello'+' '+ name+' '+ age;
}
let rest = wow('Shadhin',28,sayname);
let rest2 = wow('Shadhin2',20,ami);
console.log(rest);
console.log(rest2);


var closure_F = function(){
    var info = "info-string";
    var f1 = function(){
      console.log(info);
    };
  
    return f1;
  }();
  
  closure_F();
  console.dir(closure_F); 


function main(first){
    return function(second){
        console.log(second);
        return function(three){
            console.log(first+' '+three)
        }
    }
}
const a = main(10);
const b = a(90);
b(900)

var n=5,row,col;
for(row=1;row<=n;row++){
    for(k=1;k<=n-row;k++){
        document.write('&nbsp&nbsp&nbsp');
    }
    for(col=1;col<=row*2-1;col++){
        document.write('* ');
    }
    document.write('</br>');
}

for(row=n-1;row>=1;row--){
    for(k=1;k<=n-row;k++){
        document.write('&nbsp&nbsp&nbsp');
    }
    for(col=1;col<=row*2-1;col++){
        document.write('* ');
    }
    document.write('</br>');
}


let n,row,col;

n = parseInt(prompt('Enter any number'));

for(row=1; row<=n;row++){
    for(j=1; j<=n-row; j++){
        document.write('&nbsp&nbsp&nbsp');
    }
    for(col=1; col<=row*2-1;col++){
        document.write('* ')
    }
    document.write('</br>');
}

//Obj compare easy method
let obj1 = {
    a : 20,
    b : 3
}
let obj2 = {
    a : 20,
    b : 3
}

let jsonstr = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(jsonstr);


//Currying method
function curry(sum){ 
    return function curried(...args){
        if(args.length >=sum.length){
            return sum.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
function sum(a,b,c,){
    return a+b+c
}

let carry1 = curry(sum) 
console.log(carry1(10)(20)(40));

var react =new Function('width','height', 
    `this.width = width
     this.height = height
     this.draw = function(){
        console.log(this.width + this.height)
    }
    this.print = function(){return this.height}
    `
)
var a = new react(2,4)
console.log(a);

var react = function(width,height){
    this.width = width
    this.height = height
    var rr = {
        x : 50,
        y : 100
    }
    var print1 = function(){console.log('Print Method');console.log(this.width+this.   height)}.bind(this)
    this.draw = function(){console.log(position.x + position.y); print1()}
    Object.defineProperty(this, 'rr',{
        get : function(){return rr},
        set: function(value){
            return value
        }
    })
}
var a = new react(20,40) 
a.position = {
    x : 5000,
    y : 9000
}
console.log(a.position)



function main(){
    var print1 = {
        age : 30,
        book : 'Data',
        Dic : 'patch'
    }
    this.profession = 'web-developer',
    this.printF = function(){console.log(print1.book +' '+ this.profession)}
}
var newprint = new main();
newprint

function main(name,pro,year){
    this.name = name;
    this.pro = pro;
    this.year = year;
    this.met = function(dot){
        console.log(this.name + ' '+ this.pro+' '+ (this.year - dot));
    }
}
var s = new main('Shadhin','web', 2018)

function second(name,pro,year){
    this.name = name;
    this.pro = pro;
    this.year = year
}
var c = new second('Reza','soft',2020);
var dd = s.met.bind(c);
dd(2012)

var a = 30;

for(var i=0;i<3;i++){
    //console.log(a)
    setTimeout(function(){console.log(i)}) 
    console.log(a)
}
//console.log(a)
console.log('After calling...')

function Product(name,color,size){
    var position = {
        ShopName: 'Alor Mela',
        address : 'Bogura',
        ShopNo : 17,
        Mobile : 'xxxxxxxxxxx',
        met3 : function(){
            console.log(`Shop name : ${this.ShopName}, Address : ${this.address}, Mobile : ${this.Mobile}`)
        }
    };
    this.name = name
    this.color = color
    this.size = size
    var met2 = function(){
        console.log(`Shop No : ${this.ShopNo}`)
    }
    this.met1 = function(){
        position.met3.call(position)
        console.log(`name is : ${this.name}, color is : ${this.color}, Size : ${this.size}`)
        met2.call(position)
    }
    Object.defineProperty(this, 'position',{
        get : function(){
            return position
        },
        set : function(value){
            position = value
        }
    })
    
}

var rect = new Product('Pant','Fushia','M');
rect.position.met3()
rect.position = {
    ShopName: 'Bangla Mela',
    address : 'Dhaka',
    ShopNo : 22,
    Mobile : 'xxxxxxxxxxx',
    met3 : function(){
        console.log(`Shop name : ${this.ShopName}, Address : ${this.address}, Mobile : ${this.Mobile}`)
    }
}

rect.position.met3()

var obj = {name : 'Shadhin Ind'}

var des = Object.getOwnPropertyDescriptor(obj,'name')
console.log(des);

var define = Object.defineProperty(obj,'name',{
    configurable : false,
    enumerable : false,
    writable : false
})
console.log(define)


function Amar(namE,pro){
    this.namE = namE
    this.pro = pro
}
Amar.prototype.draw = function(){
        console.log('Name is : '+this.namE +' '+ 'Profession is : '+this.pro);
}
var amr = new Amar('Shadhin','Web-dev');

function Circale(namE,pro){
    Amar.call(this,namE,pro)
}
Circale.prototype = Object.create(Amar.prototype)
Circale.prototype.constructor = Circale
Circale.prototype.draw = function(){
    Amar.prototype.draw.call(this)
    console.log('draw anything....')
}
var cir = new Circale('Hello','software');

function mixin(target,...sources){
    Object.assign(target.prototype,...sources);
}

var obj = {
    play : function(){
        console.log('Playing....')
    }
}
var obj2 = {
    walk : function(){
        console.log('Walking....')
    }
}

function main(name){
    this.name = name
}
//Object.assign(main.prototype,obj,obj2);
mixin(main,obj,obj2)
var p1 = new main('Shadhin');
console.log(p1)

var obj3 = {
    book : function(){
        console.log('Reading.....')
    }
}
function Fish(name){
    this.name = name
}
mixin(Fish,obj3)
var p2 = new Fish('Gold-fish');
console.log(p2.book())

var arr = [21,44,555,6,78,997,3,67]

var bigNum = arr[0];
var secondbigNum = arr[1];
for(var i = 1; i<arr.length;i++){
    if(arr[i] > bigNum){
        secondbigNum = bigNum
        bigNum = arr[i]
    }else if(arr[i]>secondbigNum){
        secondbigNum = arr[i]
    }
}
console.log(bigNum);
console.log(secondbigNum);

function mYreduce(arr,cb,init){

     let acc = init,start =0
     if(!init){
          acc = arr[0];
          start = 1  
     }
     for(var i= start;i<arr.length;i++){
         acc = cb(acc,arr[i],i,arr)
     }
     return acc;
}
var arr = [1,2,3,4,5,6,7]

var res = mYreduce(arr,(acc,cur)=>{
     return acc + cur;
},2)
console.log(res);


//BUBBLE SORT IMPLEMENTATION//
var bubblesort = (arr,cb)=>{
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1;j++){
            if(cb(arr[j],arr[j+1])>0){
                let temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
}
var arr = [99,2,44,55,64,25,85,8,4,100]
bubblesort(arr,(a,b)=> b -a)
console.log(arr);


