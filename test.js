var selectElement = require('./index.js');

var options = {
    'test': 'Here is a test',
    'test2': 'here is another test with '
};

//            
selectElement(
    'select-id', // id to append the select list to
    'select-list-id', // id of the select list
    options,  // key value object of options
    'test2' // selected key
);    

s.create(); // creates the element depends on document
s.getAsString(); // Returns select-id element as string
