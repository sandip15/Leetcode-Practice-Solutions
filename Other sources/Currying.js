//show how to use currying in js
// the same program can accept different number of parameters like multiply(1)(2)(3), multiply (1,2)(3) and multiply (1)(2,3)

function multiply(){
  let args = [].slice.apply(arguments)
  console.log(args)
  function resultFn(){
    args = args.concat([].slice.apply(arguments));
    if (args.length >=3){
      return args.slice(0,3).reduce(function(acc,next){
        return acc * next
      })
    }
    return resultFn
  }
  return resultFn()
}

multiply(2,4)(5)
multiply(2,4,5)
