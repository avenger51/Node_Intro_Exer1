const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
    if(err) {
        console.error(err, data);
        process.exit(1);
    } else {
    console.log(data);
    }
});
}

cat(process.argv[2]);

//WHY IS process.argv NOT COVERED AND THE FIRST QUESTION 100% REQUIRES IT???????????????????????

//NOT IN THE LESSON:
//process.argv[0]: This is the path to the Node.js executable.
//process.argv[1]: This is the path to the JavaScript file being executed.
//process.argv[2]: This is the first actual command line argument provided by the user. 
//For example, if you run a Node.js script like node script.js arg1, then process.argv[2] will be "arg1".
//This is file one.

//fs.readFile('onexds.txt', 'utf8', function(err, data) {
//    if(err) {
//        console.log('ERROR', err);
//    }
//    console.log(data);
//});


//  ERROR [Error: ENOENT: no such file or directory, open 'onexds.txt'] {
//  errno: -2,
//  code: 'ENOENT',
//  syscall: 'open',
//  path: 'onexds.txt'
//  }