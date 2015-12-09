fs = require('fs');

var file = __dirname,
    args = process.argv.slice(2),
    regex = /(->__\()(.*)(\);)/g,
    matches = [],
    match;

    // current file location
    // console.log("This file is " + __filename);
    // Current directory path
    // console.log("It's located in " + __dirname);
    args.forEach(function (val, index, array) {
      console.log(index + ': ' + val);
    });
    file = file + args[0];


fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // regex for everything between ->__( and );

  // while ((match = regex.exec(data)) != null) {
  //     matches.push(match[1]);
  //     match = regex.exec(data);
  //     console.log(data);
  // }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  // console.log(result[0]);
});
