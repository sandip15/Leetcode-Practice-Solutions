//pinduoduo written exam
//1. problem : guess the output of the following piece of code:

setTimeout(function(){
  console.log('1')
})

new Promise(function(resolve){
  console.log('2');
  resolve();
}).then(function(){
  console.log('3')
});
console.log('4');

//answer:
// output is 2 ,4 ,3 ,1 

//2. problem: what is the output of the following code:

var bb = 1;
function aa(bb){
  bb = 2
  alert(bb)
}
aa(bb)
alert(bb)

//answer:  output is 2, then 1


//3. what is the value of a.length of the following code:

var a = []
a[0]=1
a[1]=2
a[2]=3
a[5]=4

a.length 

//Answer:  output is 6


