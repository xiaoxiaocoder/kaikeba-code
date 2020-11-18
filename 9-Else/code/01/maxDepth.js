/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

//  function TreeNode(val, left = nul, right = null) {
//    this.val = val
//    this.left = left
//    this.right = right
//  }

// function resolveArrayToTreeNode(arr) {
//   let tree = Object.create(null)
//   let left = null
//   let right = null
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     left = null
//     right = null
//     if (i === 0) {
//       if(arr[i+1]) {

//       }
//       tree = new TreeNode(item)
//     }
//   }
// }
/**
 * @param {TreeNode} root
 * @return {number}
 * 暗号：今天天气真不错
 */
var maxDepth = function (root) {
  if (!root) return 0;
  var left = maxDepth(root.left);
  var right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
