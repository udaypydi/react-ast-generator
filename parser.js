const babelParser = require('@babel/parser');
const fs = require('fs');
const code = fs.readFileSync(__dirname + '/samples/App.js', 'utf8');

const AST = babelParser.parse(code , {
    sourceType: "module",
    plugins: [
      "jsx",
      "flow"
    ]
});

console.log(AST);
