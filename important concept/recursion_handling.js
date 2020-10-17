// The following recursive code will result in a stack overflow if the array list is too large. our task is to fix this and still retain the recursive pattern

//solution: using setTimeout method
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

//answer badge

//The potential stack overflow can be avoided by modifying the nextListItem function as follows (using an event loop) :

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...  
        setTimeout( nextListItem, 0); // by passing the function into a event loop avoids going for a stack overflow.
    }
};

/* explanation
The stack overflow is eliminated because the event loop handles the recursion, not the call stack. 
When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, 
thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem.
Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.

*/
