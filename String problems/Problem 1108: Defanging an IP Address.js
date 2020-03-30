//leetcode problem number: 1108. given an IP ,Defanging an IP Address
/*Given a valid (IPv4) IP address, task is to return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".*/


var defangIPaddr = function(address) {
  let array = address.split('.')     // at first converting the string input into an array 
  return array.join('[.]')          // merging those array elements 
};
defangIPaddr("255.100.50.0")


//another method 
var defangIPaddr = function(address) {
    return address.replace(/[.]/g, '[.]');
};

defangIPaddr("255.100.50.0")
