const nums1 = [1, 2, 3, 5, 6];
const nums2 = [2, 4, 5];

/**
 * 初始化两个有序数组nums1, nums2, 元素量分别为m和n.
 * 将nums2 合并到nums1中, 使得nums1 称为一个有序数组
 * @param {Array<number>} arr1 
 * @param {Array<number>} arr2 
 * 
 * 考查知识API
 * unshift, concat, slice
 */
function merge1(arr1, arr2) {
  let index1 = arr1.length - 1;
  let index2 = arr2.length - 1;
  let result = new Array(index1 + index2 + 1)
  let num1, num2;
  while(index1 >= 0 && index2 >= 0) {
    num1 = arr1[index1];
    num2 = arr2[index2];
    if (num1 < num2) {
      index2--
      result.unshift(num2)
    } else {
      index1--
      result.unshift(num1)
    }
  }

  if(index1 === -1) {
    result = arr2.slice(0, index2 + 1).concat(result)
  }

  if(index2 === -1) {
    console.log(index1, arr1.slice(0, index1 + 1))
    result = arr1.slice(0, index1 + 1).concat(result)
  }

  console.log(result.join(','))
  return result;
}


// merge1(nums1, nums2);

const nums3 = [1,2,3,0,0,0] // m =3 0代表合并后要填补的位
const nums4 = [2,5,6] // n = 3
/**
 * 初始化两个有序数组nums1, nums2, 元素量分别为m和n.
 * 将nums2 合并到nums1中, 使得nums1 称为一个有序数组
 * @param {Array<number>} arr1 
 * @param {number} m  arr1中真实存在的元素数量 
 * @param {Array<number>} arr2 
 * @param {number} n arr2中真实存在的元素数量
 */
function merge2(arr1, m, arr2 ,n) {
  let i = m - 1;
  let j = n - 1;
  // 合并后的尾部索引
  let k = m + n - 1;

  // while(i >= 0 && j >= 0) {
  //   if (arr1[i] < arr2[j]) {
  //     arr1[k--] = arr2[j--]
  //     // j--;
  //     // k--;
  //   } else {
  //     arr1[k--] = arr1[i--];
  //     // i--;
  //     // k--;
  //   }
  // }

  // while(j >= 0) {
  //   arr1[k--] = arr2[j--]
  //   // j--;
  //   // k--;
  // }

  // 两个while可以简化成
  while(j>=0) {
    if(i< 0) {
      arr1[k--] = arr2[j--];
      continue;
    }

    arr1[k--] = arr1[i] >= arr2[j] ? arr1[i--] : arr2[j--]
  }


  console.log(arr1.join(','))
  return arr1;
}


merge2(nums3, 3, nums4, 3);