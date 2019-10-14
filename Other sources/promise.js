//learn how to use promise in js

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
