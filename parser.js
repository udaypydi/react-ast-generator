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

const astJSON = JSON.stringify(AST, null, 2);

fs.writeFileSync('./jsonrenderer/src/ast.json', astJSON, (error) => {
    console.log('Success!!');
});
