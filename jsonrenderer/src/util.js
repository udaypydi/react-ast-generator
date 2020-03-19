/**
 * Parse abstract syntax tree from JSON AST
 * @param {JSON} ast 
 * format of every node 
 * Node {
 *  name: String,
 *  attributes: {
 *      start: Number,
 *      end: Number,
 *      value: String,
 *  },
 * children: Array<Node>
 * }
 */

export const parseAST = (ast) => {

    // parse every key in ast to form a d3 tree json.

    const astKeys = Object.keys(ast);
    if (Array.isArray(ast)) {
        ast.forEach(element => {
            parseAST(element);
        });
    } else {
        if (astKeys.indexOf("program") !== -1) {
            parseAST(ast["program"]);
        } else if (astKeys.indexOf("body") !== -1) {
            parseAST(ast["body"]);
        } else if (astKeys.indexOf("value") !== -1) {
            console.log(ast['value']);
        }
    }
}