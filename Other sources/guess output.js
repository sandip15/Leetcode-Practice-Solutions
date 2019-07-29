//pinduoduo written exam
1.
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

output is 2 ,4 ,3 ,1 

2.
var bb = 1;
function aa(bb){
  bb = 2
  alert(bb)
}
aa(bb)
alert(bb)
output is 2, then 1


3.
var a = []
a[0]=1
a[1]=2
a[2]=3
a[5]=4
a.length // output is 6
