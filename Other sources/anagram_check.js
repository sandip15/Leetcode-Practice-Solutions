//check if the given two strings are anagrams to each other
var firstWord = "Mary";
var secondWord = "Ary";

function isAnagram(firstWord,secondWord){
  if (firstWord.length !== secondWord.length){
    return 'no they are not anagrams to each other'
  }
  else{
    let a = firstWord.toLowerCase().split("").sort().join("")
    let b = secondWord.toLowerCase().split("").sort().join("")
    if (a == b){
      return "yes they are anagram to each other"
    }
  }
}

isAnagram(firstWord,secondWord)
