/* Note about different array/string methods in js */

Slice ( )
/*
it Copies elements from an array and then
Returns them as a new array,
Doesn’t change or modify the original array
Starts slicing from … until given index: array.slice (from, until)
Slice doesn’t include “until” index parameter
Can be used both for arrays and strings
*/

Splice ( )
/*
Used for adding/removing elements from array
Returns an array of removed elements
it Changes or modifies the original array 
For adding elements: array.splice (index, number of elements, element)
For removing elements: array.splice (index, number of elements)
Can only be used for arrays
*/

Split ( )
/*
Divides a string into substrings
Returns them in an array
Takes 2 parameters, both are optional: string.split(separator, limit)
Doesn’t change the original string
Can only be used for strings
*/
