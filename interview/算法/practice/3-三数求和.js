/**
 * 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 
 * 示例: 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */

function three_num_sum(nums) {
  const nums_len = nums.length;

  if(!Array.isArray(nums) || nums_len < 3) return []

  nums = nums.sort((a, b) => a - b);

  const result = []

  let startIndex = 1;
  let endIndex = -1;

  for (let focusIndex = 0; focusIndex < nums_len - 2; focusIndex++) {
    // 左指针
    startIndex = focusIndex + 1;
    // 右指针
    endIndex = nums_len - 1;

    // 遇到重复的数字, 跳过
    if(focusIndex > 0 && nums[focusIndex] === nums[focusIndex - 1]) {
      continue
    }

    while(startIndex < endIndex) {
      const sum = nums[focusIndex] + nums[startIndex] + nums[endIndex]
      if(sum < 0) {
        startIndex++
        // 处理左指针元素重复的情况
        while(startIndex < endIndex && nums[startIndex] === nums[startIndex - 1]) {
          startIndex++
        }
      } else if (sum > 0) {
        endIndex--
        // 处理右指针元素重复的情况
        while(startIndex < endIndex && nums[endIndex] !== nums[endIndex+1]) {
          endIndex--
        }
      } else {
        result.push([nums[focusIndex], nums[startIndex], nums[endIndex]]);
        startIndex++;
        endIndex--;

        while(startIndex < endIndex && nums[startIndex] === nums[startIndex - 1]) {
          startIndex++
        }

        while(startIndex < endIndex && nums[endIndex] === nums[endIndex + 1]) {
          endIndex--
        }
      }
    }
  }

  return result
}

const nums = [-1, 0, 1, 2, -1, -4];
three_num_sum(nums)
