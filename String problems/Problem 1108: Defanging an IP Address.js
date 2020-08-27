//leetcode problem number: 1108. given an IP address,need to Defange that IP Address
/*Given a valid (IPv4) IP address, our job is to return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".*/


var defangIPaddr = function(address) {
  let array = address.split('.')     // Converting the string input into an array 
  return array.join('[.]')          // Merging those array elements 
};
defangIPaddr("255.100.50.0")


//alternative approach to solve the above problem 


var defangIPaddr = function(address) {
    return address.replace(/[.]/g, '[.]');
};

defangIPaddr("255.100.50.0")
