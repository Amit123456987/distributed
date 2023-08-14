const psTree = require('ps-tree');

const tree = psTree(18104, function(err,children){
    console.log(children);
});

console.log(tree);