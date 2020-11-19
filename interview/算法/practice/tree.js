function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new Tree('根')
const leaf_1 =new Tree('叶-1')
const leaf_2 = new Tree('叶-2')
const leaf_1_0 =new Tree('叶-1-1')
const leaf_1_1 =new Tree('叶-1-2')
const leaf_2_0 =new Tree('叶-2-1')

root.left = leaf_1
root.right = leaf_2

leaf_1.left = leaf_1_0
leaf_1.right = leaf_1_1

leaf_2.left = leaf_2_0

/**
 * 先序遍历(根节点-> 左子树 -> 右子树)
 * @param {Tree}} root 根节点
 */
function preorder(node) {
  if(!node) return

  console.log('先续遍历 :>> ', node.val);
  preorder(node.left);
  preorder(node.right);
}

preorder(root);

/**
 * 前序遍历 左子树 -> 根节点 -> 右子树
 * @param {TreeNode} root 
 */
function inorder(node) {
  if(!node) return

  inorder(node.left)
  console.log('前序遍历 :>> ', node.val);
  inorder(node.right)
}

console.log()
inorder(root)

/**
 * 中序遍历 (左子树 -> 右子树 -> 根节点)
 * @param {TreeNode} treeNode 
 */
function postorder(node) {
  if(!node) return

  postorder(node.left)
  postorder(node.right)
  console.log('后序遍历 :>> ', node.val);
}
console.log()
postorder(root)