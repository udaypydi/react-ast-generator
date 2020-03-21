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
 *  children: Array<Node>
 * }
 */

 let treeData = {
     children: [],
 };


export const parseAST = (ast, prevKey = '') => {
    const astKeys = Object.keys(ast);
    if (Array.isArray(ast)) {
        ast.forEach(element => {
            parseAST(element);
        });
    } else {
        if (prevKey === 'program' || prevKey === 'body') {
            treeData.children.push({
                name: ast.type,
                attributes: {
                    start: ast.start,
                    end: ast.end,
                }
            });
        } else {
            treeData = { 
                name: ast.type,
                attributes: {
                    start: ast.start,
                    end: ast.end,
                },
                children: treeData.children.length ? treeData.children : []
            }
        }
    
        if (astKeys.indexOf("program") !== -1) {
            parseAST(ast["program"], 'program');
        } else if (astKeys.indexOf("body") !== -1) {
            parseAST(ast["body"], 'body');
        } else if (astKeys.indexOf("value") !== -1) {
            console.log(ast['value']);
        }
    }
    return treeData;
}