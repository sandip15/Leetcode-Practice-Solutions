//Application of currying in Javascript

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
