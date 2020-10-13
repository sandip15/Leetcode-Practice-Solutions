//practicing promise to handle asynch operations in js clarifying the concept of how promise works underneath the hood in javascript

const add = function (a,b){
  return new Promise((resolve,reject) => {
    let sum = a+b ;
    if (sum){
      resolve(sum)
    }else{
      reject("sorry we cant add them!!")
    }
  })
}

const sub = function (a,b){
  return new Promise (function (resolve,reject){
    let subt = a-b;
    if (subt){
      resolve(subt)
    }else{
      reject ("sorry we cant subtract them!!")
    }
  })
}

add(2,2).then(function (added){.    // here we are chaining all the promises together
  return sub(added,3)
}).then((subtracted) => {
  return add(subtracted,5)
}).then (function (added){
  return sub(added, 3)
}).catch((err) => {
  console.log(err)
})
