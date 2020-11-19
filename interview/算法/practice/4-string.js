/**
 * 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 */

function validPalindrome(str) {
  // 从
  const len = str.length;

  let i = 0;
  j = len - 1;

  // 左右指针内容相同, 指针向中间移动
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }

  /**
   * 尝试跳过左指针元素后的字符串判断是否为回文
   */
  if (isPalindrom(i + 1, j)) {
    return true;
  }

  /**
   * 判断跳过右指针元素后的字符串是否为回文
   */
  if (isPalindrom(i, j - 1)) {
    return true;
  }

  return false;

  /**
   * 判断是否回文
   * @param {string} start startIndex
   * @param {string} end endIndex
   */
  function isPalindrom(start, end) {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

// console.log(validPalindrome('abca'))

/**
 * 设计一个支持以下两种操作的数据结构：
> void addWord(word)
  bool search(word)
  search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
  . 可以表示任何一个字母。
 */

class WordDictionary {
  constructor() {
    this.words = {};
  }

  addWord(word) {
    const len = word.length;
    if (this.words[len]) {
      this.words[len].push(word);
    } else {
      this.words[len] = [word];
    }
  }

  search(word) {
    const len = word.length;
    if (!this.words[len]) {
      return false;
    }

    if (!word.includes(".")) {
      return this.words[len].includes(word);
    } else {
      const reg = new RegExp(word);
      return this.words[len].some((w) => reg.test(w));
    }
  }
}

const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("mad");
wd.addWord("dad");

// console.log(wd.search(".ad"));


/**
 * 真题描述：请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
在任何情况下，若函数不能进行有效的转换时，请返回 0。

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 。

示例 1:

输入: "42"
输出: 42

示例 2:

输入: " -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
示例 3:

输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。

示例 4:

输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。 因此无法执行有效的转换。

示例 5:

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。因此返回 INT_MIN (−2^31) 。


 */

function myAtoi(str) {

  if (!str.length) {
    return 0
  } else {
    const MAX = Math.pow(2, 31) - 1
    const MIN = - Math.pow(2, 31) + 1

    const reg = /([+-]?\d+([.]\d+)?)/
    const [, match] = str.match(reg) || []
    if(match) {
      if(match < MIN) {
        return MIN
      } else if( match > MAX) {
        return MAX
      } else {
        return match
      }
    }
    return 0
  } 
}

console.log(`myAtoi('      +10086') `, myAtoi('      +10086'));
console.log(`myAtoi('42') `, myAtoi('  42   '));
console.log(`myAtoi('-42') `, myAtoi('-42'));
console.log(`myAtoi('4193 with words') `, myAtoi('4193 with words'));
console.log(`myAtoi('words and 987') `, myAtoi('words and 987'));
console.log(`myAtoi('-91283472332') `, myAtoi('-91283472332'));