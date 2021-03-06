/**
 * /*
 *
 * [617] 合并二叉树
 *
 * @format
 * @lc app=leetcode.cn id=617 lang=typescript
 */

// @lc code=start
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) return null
  //* 终止条件.左右子节点有一个为null时
  if (root1 === null) return root2
  if (root2 === null) return root1
  //* 合并相同的节点
  root1.val += root2.val
  //* 递归左右子树
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
}
// @lc code=end

export {}
