//andrew course ex:23 (this keyword)
//tricky javascript problem, Need to find the output of the following questions

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


//problem: write what is the output of the following: 

let arr = [1,2,3];
arr.map(item => {return item*2});
console.log(arr)  
//output will be [1,2,3]



//what is the ouput of the following code

var arr1 = [{name:"sandip",age:16},{name:'joy',age:17}];

var arr2 = [1,2,3];
arr1.forEach(item => {item.age = item.age +1});
console.log(arr1)
// returns [ { name: 'sandip', age: 17 }, { name: 'joy', age: 18 } ]

arr2.forEach(item => { return  item*2})
console.log(arr2) // returns [ 1, 2, 3 ]

//for making it work we can use:
arr2.forEach((item,i)  => { arr2[i] = item*2})
console.log(arr2) //returns [2,4,6]



//problem: need to write the output of the following piece of code

let a ={
  url :'996'
};
let b = {
  name:"sandip",
  url: a
};
let c = Object.assign({},b);  /* by assigning an object like this we are just creating a shallow copy of the object, 
                              that means the nested object (a) still refers to the original object and changing either one will effect both the objects */
console.log(c)

/* output is :
{name: 'sandip', url : {
  url: '996.icu'
 }} */

//problem: guess the output of the following problem 
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

/*what is the output of the following:
a defined? false
b defined? true  */


//problem : write the  output of the following problem 
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


/*problem: write a function so that both of the following function call works 
console.log(sum(2,3))
console.log(sum(2)(3)) */

//solution :
function sum(x,y){
  if (y!== undefined){
    return x+y;
  }else{
    return function (y){
      return x+y
    }
  }
}

console.log(sum(2,3))
console.log(sum(2)(3))

//guess the output of the following expressions
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

/*output is :
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
*/

//problem : guess what is the output of the following Problem
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

//output is 
10
2 



//Task is to write the output for the following problem 

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

/* output is  undefined */

//extra little tricky questions ： what is the output of the following question 
console.log(1 < 2 < 3);  //output is true , please state the reason behind that?
console.log(3 > 2 > 1);  // output is false ,  also state the reason please ?

/*How do you check if an object is an array or not? */
//solution of the problem 
var arrayList = [1,2,3];
if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {
    console.log('Array!');
}
