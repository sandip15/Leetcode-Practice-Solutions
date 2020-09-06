// Practicing use of generator functions
// Using generator function will pause the execution of the function and resumes it until yield, very useful for pausing the execution of some context

const myGen = function* (){
  const one = yield 1;  // first resume of the funciton execution
  console.log("i am good!!") 
  const two = yield 2;
  const three = yield 3;

  return "finished!!"
}

const gen = myGen()
gen.next()
gen.next()
