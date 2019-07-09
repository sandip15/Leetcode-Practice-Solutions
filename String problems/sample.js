
// leetcode problem no :344 
// Reverse a given string using  0(1)space 

var reverseString = function(s) {
  var i =0;
  var j =s.length-1;
  if (s.length <=1) return s;

  while (i<j){
    [s[i],s[j]] = [s[j],s[i]];
    i++;
    j--;
  }
  return s
};
s = ["h","e","l","l","o"]
reverseString(s);