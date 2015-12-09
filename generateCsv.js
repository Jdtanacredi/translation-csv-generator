fs = require('fs');

var file = __dirname + "/index.phtml",
    regex = /(->__\()(.*)(\);)/g,
    matches = [],
    match;

    // current file location
    // console.log("This file is " + __filename);
    // Current directory path
    // console.log("It's located in " + __dirname);

fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // regex for everything between ->__( and );

  while ((match = regex.exec(data)) != null) {
      matches.push(match[1]);
      match = regex.exec(data);
      console.log(data);
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  // console.log(result[0]);
});
