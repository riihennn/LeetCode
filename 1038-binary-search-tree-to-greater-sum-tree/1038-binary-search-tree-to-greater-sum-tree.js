var bstToGst = function(root) {
    let sum = 0;

    function traverse(node) {
        if (!node) return;

        // Step 1: go right
        traverse(node.right);

        // Step 2: update sum and node
        sum += node.val;
        node.val = sum;

        // Step 3: go left
        traverse(node.left);
    }

    traverse(root);
    return root;
};