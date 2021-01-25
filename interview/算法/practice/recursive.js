/**
 * 全遍历
 *
 * @param {number[]} nums nums
 * @returns {number[][]}
 */
export function permute(nums) {
  const len = nums.length;

  //curr 变量用来记录当前的排列内容
  const curr = [];

  // res 用来记录所有的排列顺序
  const res = [];

  // visited用来避免重复度使用同一个数字
  const visited = {};

  dfs(0);

  return res;

  function dfs(nth) {
    // 若遍历到了不存在的坑位(第len + 1), 则触碰递归边界返回
    if (nth === len) {
      // 此时len个坑位已经填满, 将对应的排列记录下来
      res.push(curr.slice());
      return;
    }
    // for循环里, 调用方法名, 再次进入循环
    for (let i = 0; i < len; i++) {
      // 若nums[i]之前没有被其他坑位用过, 则可以理解为"这个数字剩下了"
      // if(!visited[nums[i]]){
      //   // 标记已访问过的元素
      //   visited[nums[i]] = 1;
      //   // 将nums[i]推入当前排列
      //   curr.push(nums[i])
      //   // 基于这个排列继续往下一个坑走去
      //   // 调用dfs, 进入下一个小循环, 将符合条件的值插入到curr队列中
      //   console.log('nth+1, i :>> ', nth+1, i);
      //   dfs(nth+1)
      //   // nums[i]让出当前坑位
      //   curr.pop()
      //   // 下掉"已用过"标识
      //   visited[nums[i]] = 0
      // }

      // 使用索引, 可以先仅使用索引来做全排列,
      if (!visited[i]) {
        // 标记已访问过的元素
        visited[i] = 1;
        // 将nums[i]推入当前排列
        curr.push(nums[i]);
        // 基于这个排列继续往下一个坑走去
        // 调用dfs, 进入下一个小循环, 将符合条件的值插入到curr队列中
        dfs(nth + 1);
        // nums[i]让出当前坑位
        curr.pop();
        // 下掉"已用过"标识
        visited[i] = 0;
      }
    }
  }
}

function visitedWhile(nums) {
  const len = nums.length;
  const res = [];
  let index = 0;
  let tempArr = [...nums];
}

/**
 * 
 * @param {array<number>} nums nums
 * 示例: 输入: nums = [1,2,3]
    输出:
    [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
    ]
 */
export function subsets(nums) {
  const len = nums.length;

  const res = [];

  // 单个循环遍历结果
  const subset = [];

  function dfs(index) {
    res.push(subset.slice());
    for (let i = index; i < len; i++) {
      subset.push(nums[i]);
      // 基于当前数字在组合中的情况, 进一步dfs
      dfs(i + 1);
      subset.pop();
    }
  }

  dfs(0);
  console.log("res :>> ", res);
  return res;
}
