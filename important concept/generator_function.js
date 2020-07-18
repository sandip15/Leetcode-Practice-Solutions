//practicing use of generator functions
// using generator function will pause the execution of the function and resumes it until yield
const myGen = function* (){
  const one = yield 1;
  console.log("i am good!!")
  const two = yield 2;
  const three = yield 3;

  return "finished!!"
}

const gen = myGen()
gen.next()
gen.next()
