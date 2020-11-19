export function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(4);

const head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

function mergeList(l1, l2) {
  // 定义头节点, 确保链表可以被访问到
  let head = new ListNode();

  // cur 指针
  let cur = head;

  while (l1 && l2) {
    //
    if (l1.val < l2.val) {
      cur.next = l1;

      l1 = l1.next;
    } else {
      cur.next = l2;

      l2 = l2.next;
    }
    // 指针指导下一个节点
    cur = cur.next;
  }

  // while循环结束, 有一个节点已经为空
  cur.next = l1 !== null ? l1 : l2;
  return head.next;
}

const list = mergeList(head1, head2);

export function printList(list, modifier) {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  // console.log(arr.join("->"));
  return modifier ? arr.join(modifier) : arr;
}

// printList(list)
// console.log('list.val :>> ', list.val);
// console.log('111 :>> ', list);

function deleteDuperlicateNode(head) {
  let cur = head;

  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      // 删除下一个重复的节点
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

const duplicateListHead = new ListNode(1);
duplicateListHead.next = new ListNode(1);
duplicateListHead.next.next = new ListNode(3);
duplicateListHead.next.next = new ListNode(3);
duplicateListHead.next.next.next = new ListNode(4);

// printList(deleteDuperlicateNode(duplicateListHead))

export function removeAllDuplicationListNode(head) {
  const dummy = new ListNode();

  dummy.next = head;
  let cur = dummy;

  // 第一次执行while循环时, cur.next 为传入的head节点
  // 连续对比后面连着的两个节点
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val;
      // 遍历后续节点, 如果有重复, 则跳过该重复节点
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}

/**
 * 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
 * 
 * 最简单的思路: 用数组存储节点, 删除倒数第n个, 然后再组合起来
 * 正规的解法: 使用快慢指针来解决
 * @param {ListNode} head 首页点
 * @param {number} n 倒数第N个节点
 */
export function removeNodeByPoint(head, n) {
  const dummy = new ListNode();

  // let cur = head;
  // const arr = []
  // // 先翻转链表, 删除第n个节点, 之后再翻转会来
  // // 另一个思路, 使用数组存储节点, 删除倒数第n个, 然后再组合起来
  // while (cur) {
  //   arr.push(cur)
  //   cur = cur.next;
  // }
  // // 正常要删除的节点的是倒数第n项,  对应的索引是 arr.length - n - 1 + 1
  // arr.splice(arr.length - n, 1);
  
  // const len = arr.length;
  // cur = dummy
  // for(let i = 0; i < len; i++) {
  //   cur.next = arr[i];
  //   cur = cur.next;
  // }

  // 使用快慢指针, 提前记忆n
  dummy.next = head;
  // 初始化快慢指针, 均指向dummy
  let fast = dummy
  let slow = dummy

  // 走到倒数第n步
  while(n !== 0) {
    fast = fast.next
    n--
  }

  // 继续走完整个链表, 结束时, slow正好走到倒数第n步
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }

  // 删除倒数节点n
  slow.next = slow.next.next

  return dummy.next;
}

/**
 * 反转链表
 * 1->2->3->4->5->NULL -> 5->4->3->2->1->NULL
 * @param {*} head 
 */
export function reverList(head) {
  let pre = null

  let cur = head

  while(cur != null) {
    let next = cur.next

    cur.next = pre
    pre = cur
    cur = next
  }
  // 反转结束后, pre称为新链表的头结点
  return pre
}


export function reverseBetween(head, m, n) {

  const dummy = new ListNode()
  dummy.next = head
  
  let p = dummy
  for(let i = 0; i < m - 1; i++) {
    p = p.next
  }

  let pre, cur, leftHead;

  leftHead = p

  // 反转区间的第一个节点
  let start = leftHead.next

  // pre 指向第一个节点
  pre = start

  // cur之指向start 下一个节点
  // for循环接触, cur执行n节点的后一个节点, start 执行n节点(即m节点移动到n节点)
  cur = pre.next

  for(let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  leftHead.next = pre
  start.next = cur

  return dummy.next
}

/**
 * 判断是否是环形链表
 * @param {ListNode} head 链表头节点
 */
export function isCycleList(head) {
  // let cur = head

  // while(cur) {
  //   if (cur.flag) {
  //     return true
  //   } else {
  //     cur.flag = true
  //     cur = cur.next
  //   }
  // }
  // return false
  let slow = fast = head

  while(slow) {
    if (slow.val === fast.val) {
      return true
    }
    slow = slow.next
    fast = fast.next.next
  }
  return false
}

/**
 * 定位环形链表的起始节点
 * 输出结果:
 * 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。
 * 输出：tail connects to node index 0
 * 输出：no cycle
 * @param {ListNode} head 链表头节点
 */
export function cycleListStartPoint(head) {
  let cur = head
  let index = 0
  while(cur) {
    if(cur.hasOwnProperty('index')) {
      return `tail connects to node index ${cur.index}`
    } else {
      // cur.flag = true
      cur.index = index++
      cur = cur.next
    }
  }
  return 'no cycle'
}