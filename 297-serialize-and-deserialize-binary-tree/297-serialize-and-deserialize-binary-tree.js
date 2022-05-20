/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const helper = (root, treeString) => {
    if (!root) {
      treeString += "null,";
    } else {
      treeString += String(root.val) + ","
      treeString = helper(root.left, treeString)
      treeString = helper(root.right, treeString)
    }
    //console.log(treeString)
    return treeString
    }
  return helper(root, "")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  
    const helper = (treeList) => {
      if (treeList[0] === "null") {
        treeList.shift()
        return null
      }
      let root = new TreeNode(treeList[0])
      treeList.shift();
      root.left = helper(treeList)
      root.right = helper(treeList)
      return root
    }
  let treeList = data.split(",")
  root = helper(treeList)
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */