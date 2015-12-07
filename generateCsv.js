fs = require('fs');

var file = "/Users/jtanacredi/Dev/testing/translation-parser/index.phtml"

fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);
  // var regex = /[\-\>]+/;
  var regex = /[\-\>\_\_\(]+/;
  var result = regex.exec(data);
  console.log(result);
  //  TAKE result and continue parsing for strings to translate. Move to csv
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  console.log(result[0]);
});
