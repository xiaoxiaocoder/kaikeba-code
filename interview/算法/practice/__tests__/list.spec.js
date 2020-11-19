import {
  ListNode,
  printList as ListNode2Array,
  removeAllDuplicationListNode,
  removeNodeByPoint,
  reverList,
  reverseBetween,
  isCycleList,
  cycleListStartPoint
} from "../5-list";

// it test, describe 区别
describe("链表算法练习", () => {
  test("删除有序链表中的重复项", () => {
    const head = new ListNode(1);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(3);
    const node5 = new ListNode(4);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const list = removeAllDuplicationListNode(head);
    const arr = ListNode2Array(list, "->");
    expect(arr).toEqual("2->4");
  });

  test("快慢指针,删除指定位置节点", () => {
    const head = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);
    const node3 = new ListNode(4);
    const node4 = new ListNode(5);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    const list = removeNodeByPoint(head, 2);
    const arr = ListNode2Array(list, "->");
    expect(arr).toEqual("1->2->3->5");
  });


  test("反转链表", () => {
    const head = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);
    const node3 = new ListNode(4);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;

    const list = reverList(head, 2, 4);
    const arr = ListNode2Array(list, "->");
    expect(arr).toEqual("4->3->2->1");
  });


  test("部分反转链表", () => {
    const head = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);
    const node3 = new ListNode(4);
    const node4 = new ListNode(5);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    const list = reverseBetween(head, 2, 4);
    const arr = ListNode2Array(list, "->");
    expect(arr).toEqual("1->4->3->2->5");
  });

  test("判断是否是环形链表", () => {
    const head = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);
    const node3 = new ListNode(4);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node1;

    const flag = isCycleList(head);
    expect(flag).toEqual(true);
  });

  describe('判断环形链表起点', () => {
    const tempTxt = 'tail connects to node index'
    test("环形链表起点的索引为1", () => {
      const head = new ListNode(1);
      const node1 = new ListNode(2);
      const node2 = new ListNode(3);
      const node3 = new ListNode(4);
      head.next = node1;
      node1.next = node2;
      node2.next = node3;
      node3.next = node1;
  
      const flag = cycleListStartPoint(head);
      expect(flag).toEqual(`${tempTxt} 1`);
    });

    test("环形链表起点的索引为0", () => {
      const head = new ListNode(1);
      const node1 = new ListNode(4);
      head.next = node1;
      node1.next = head;
  
      const flag = cycleListStartPoint(head);
      expect(flag).toEqual(`${tempTxt} 0`);
    });

    test('传入的链表不是环形链表', ()=> {
      const head = new ListNode(1);
      const node1 = new ListNode(2);
      const node2 = new ListNode(3);
      const node3 = new ListNode(4);
      const node4 = new ListNode(5);
      head.next = node1;
      node1.next = node2;
      node2.next = node3;
      node3.next = node4;

      const result = cycleListStartPoint(head)
      expect(result).toEqual('no cycle')
    })
  })
});
