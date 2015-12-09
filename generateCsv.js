fs = require('fs');

// var file = "/Users/jtanacredi/Dev/testing/translation-parser/index.phtml"
var file = "/Users/justintanacredi/Dev/node/translation-csv-generator/index.phtml"

fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // regex for everything between ->__( and );
  var regex = /(->__\()(.*)(\);)/;


  var result = regex.exec(data);
  console.log(result);


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  // console.log(result[0]);
});
