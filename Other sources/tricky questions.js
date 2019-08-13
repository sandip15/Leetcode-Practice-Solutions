//andrew course ex:23 (this keyword)
//tricky javascript problem, write the output of the following questions

var b = {
  name: 'sandip',
  say() {console.log(this)}
}

var c ={
  name: 'joy',
  say(){return function(){
    console.log(this)
  }}
}

var d = {
  name: 'sandy',
  say(){ return () =>{
    console.log(this)
  }}
}

b.say() //  outputs b object, since here b is calling the function , so this refers to the b object

c.say()()  /*  outputs the window(global) object since here this is a function inside a method and this is 
dynamically scoped to the window object */

d.say()()  /* outputs the d object. here this refers to the d object since we are using the arrow function which 
is lexically scoped, instead of functionally scoped. */


//problem: what is the output of the following: 

let arr = [1,2,3];
arr.map(item => {return item*2});
console.log(arr)  
//output will be [1,2,3]



//what is the ouput of the following code

var arr1 = [{name:"sandip",age:16},{name:'joy',age:17}];

var arr2 = [1,2,3];
arr1.forEach(item => {item.age = item.age +1});
console.log(arr1)

arr2.forEach(item => { return  item*2})

console.log(arr2)



//problem:  write the output of the following piece of code

let a ={
  url :'996'
};
let b = {
  name:"sandip",
  url: a
};
let c = Object.assign({},b);
a.url = a.url + '.icu'
console.log(c)

//output is :
//{name: 'sandip', url : {
//   url: '996.icu'
// }}

//problem: guess the output of the following problem 
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

/*output is: 
a defined? false
b defined? true  */


//problem : what is the output of the following problem 
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/*output is : 
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar  */
