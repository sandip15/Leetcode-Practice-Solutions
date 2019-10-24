//practicing about how to use promise in js （make asynchoronous operations easy to handle)

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
//using ES6 syntex

const promise = new Promise((resolve,reject)=>{
  if (true){
    resolve("it worked!!")
  }else{
    reject("there is an error!! ")
  }
})

promise.then(result => result + '!').then(result2 => {console.log(result2 + "--")});
