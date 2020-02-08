//question: practicing the use of call and apply to change the value of this 
// the use of call method: generally call is used for passing the inheritence from the mother class to the children class


function add(a,b){
  return a+b + this.c + this.d
}

let obj = {c:3,d:5}
/* The first parameter is the object to use as 'this', subsequent parameters are passed as  arguments in the function call */
add.call(obj,1,5)

/* The first parameter is the object to use as 'this', the second is an array whose members are used as the arguments in the function call */
add.apply(obj,[1,2])

----------------
function sum(){
  return this.a+this.b+this.c
}

let obj = {
  a:1,
  b:2,
  c:3
}

sum.call(obj)
