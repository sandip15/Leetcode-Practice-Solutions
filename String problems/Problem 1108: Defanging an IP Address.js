//leetcode problem : 1108. Defanging an IP Address
/*Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".*/


var defangIPaddr = function(address) {
  let array = address.split('.')     // converting the string input to array 
  return array.join('[.]')          // merging the array elements 
};
defangIPaddr("255.100.50.0")


//another method 
var defangIPaddr = function(address) {
    return address.replace(/[.]/g, '[.]');
};

defangIPaddr("255.100.50.0")
