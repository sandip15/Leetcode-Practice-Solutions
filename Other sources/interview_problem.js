//Write a sum method which will work properly when invoked using either syntax below : sum(x)(y) and sum (x,y)

//first method

function sum(x){
  if (arguments.length == 2){
    return arguments[0]+ arguments[1]
  }else{
    return function (y){
      return x+y
    }
  }
}
sum (1)(3)


//second method

function sum (x,y){
  if (y !== undefined){
    return (x+y)
  }else{
    return function (y){
      return x+y
    }
  }
}

sum(4)(5)
