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
