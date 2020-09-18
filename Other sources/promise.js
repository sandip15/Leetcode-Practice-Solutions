//practicing about how to use promise in js （make asynchoronous operations easy to handle)
// Question: how to implement a promise in javascript, for understanding how it works underneath the hood

let promiseToClean = function(){
  return new Promise(function(resolve,reject){
    resolve ("Room is cleaned");
  });
};

let cleanTheGarbage = function (messages){
  return new Promise(function(resolve,reject){
    resolve (messages+ " garbage is cleaned ");
  });
};

promiseToClean().then(function(result){
  return cleanTheGarbage(result)
}).then(function(result){
  console.log('finished ' + result);
})


//-----------------------------------------------
// rewrite the use of promise using the ES6 syntex. (practice es6)

const promise = new Promise((resolve,reject)=>{
  if (true){
    resolve("it worked!!")
  }else{
    reject("there is an error!! ")
  }
})

promise.then(result => result + '!').then(result2 => {console.log(result2 + "--")});
