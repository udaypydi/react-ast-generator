/**
 * Parse abstract syntax tree from JSON AST using recursive algorithm.
 * @param {JSON} ast 
 * @param {String} key
 * @param {Object} tree
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

const initialTreeState = {
    children: [],
};

export const parseAST = (ast = {}, prevKey = '', tree = initialTreeState) => {
    const astKeys = Object.keys(ast);
    if (Array.isArray(ast)) {
        ast.forEach(element => {
            parseAST(element, null, tree);
        });
    } else {
        if (prevKey === 'program' || prevKey === 'body') {
            tree.children.push({
                name: ast.type,
                attributes: {
                    start: ast.start,
                    end: ast.end,
                }
            });
        } else {
            tree = { 
                name: ast.type,
                attributes: {
                    start: ast.start,
                    end: ast.end,
                },
                children: tree.children.length ? tree.children : []
            }
        }
    
        if (astKeys.indexOf("program") !== -1) {
            parseAST(ast["program"], 'program', tree);
        } else if (astKeys.indexOf("body") !== -1) {
            parseAST(ast["body"], 'body', tree);
        } else if (astKeys.indexOf("value") !== -1) {
            console.log(ast['value']);
        }
    }
    return tree;
}
