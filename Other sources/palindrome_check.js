// write a function that determines whether or not the given string is a palindrome

function isPalindrome(str){
  console.log (str.toLowerCase())
  console.log(str.toLowerCase().split("").reverse().join(""))
  str = str.replace(/\W/g, '')
  return str.toLowerCase() == str.toLowerCase().split("").reverse().join("")
}

isPalindrome("A car, a man, a maraca")
