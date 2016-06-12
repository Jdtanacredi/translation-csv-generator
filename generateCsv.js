fs = require('fs');

var file = __dirname,
    args = process.argv.slice(2),
    regex = /(->__\()(.*)(\);)/g,
    matches = [],
    match;
    // console.log(process.argv);
    // current file location
    // console.log("This file is " + __filename);
    // Current directory path
    // console.log("It's located in " + __dirname);

    // args.forEach(function (val, index, array) {
    //   console.log(index + ': ' + val);
    // });

    // file = file + args[0];
    file = file + "/index.phtml"

//
fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // regex for everything between ->__( and );

  while ((match = regex.exec(data)) != null) {
      matches.push(match[2]);
      console.log(match);
      console.log(matches);
  }
  fs.writeFile('./formList.csv', matches, 'utf8', function (err) {
    if (err) {
      console.log('Some error occurred - file either not saved or corrupted file saved.');
    } else{
      console.log('It\'s saved!');
    }
  });



  // console.log(matches);
  //
  // var result = regex.exec(data);
  // console.log(result);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  // console.log(result[0]);
});
