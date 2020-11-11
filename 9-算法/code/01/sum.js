/**
 * 暗号：今天天气真不错
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

https://leetcode-cn.com/problems/two-sum/
 */

 /**
  * 暗号：今天天气真不错
  * @param {number []} nums 
  * @param {number} target 
  * @return {number []}
  */
 var twoSum = function(nums, target) {
   /**
    * 方案一： 两层循环
    * 时间复杂度 O(n^2)
    * 空间复杂度O(1)
    */
  //  let num1, num2;
  //  for (let i = 0; i < nums.length; i++) {
  //    num1 = nums[i];
  //    for (let j = i + 1; j < nums.length; j++) {
  //     num2 = nums[j];
  //      if(target === num1 + num2){
  //        return [i, j]
  //      }
  //    }
  //  }

    /**
     * 方案二： 使用对象存取变量， 以空间换时间
     * 时间复杂度 O(n), 空间复杂度 O(n)
     */
    const obj = new Map()
    let diff, num
    for (let i = 0; i < nums.length; i++) {
      num = nums[i]
      diff = target - num
      if(obj.has(num)) {
        return [obj.get(num),i]
      }
        obj.set(diff, i)
    }
 }
