/**
 * Parse abstract syntax tree from JSON AST
 * @param {JSON} ast 
 * 
 */
export const parseAST = ast => {
    const astKeys = Object.keys(ast);
    if (astKeys.indexOf("program") !== -1) {
        parseAST(ast["program"]);
    } else if (astKeys.indexOf("body") !== -1) {
        parseAST(ast["body"]);
    } else if (astKeys.indexOf("value") !== -1) {
        console.log(ast['value']);
    }
}