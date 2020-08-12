// import  { updateContainer } from '../../k-react-reconciler/ReactFiberReconciler'
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const PLACEMENT = "PLACEMENT";

// 下一个单元任务fiber
let nextUnitOfWork = null;
// work in progress fiber
let wipRoot = null;

export function render(element, container, callback) {
  // console.log("render >>", element, typeof element);
  // const node = createNode(element);
  // container.appendChild(node);

  // 初始值
  wipRoot = {
    node: container,
    props: {
      children: [element],
    },
  };
  nextUnitOfWork = wipRoot;
}

// function legacyRenderSubtreeOntoContainer(parentComponent, children, container, forceHydrate, callback){

//   if(typeof callback === 'function') {}
//   updateContainer(children, container, parentComponent, callback)

// }

/**
 * 创建DOM节点
 */
function createNode(vnode) {
  // console.log("createNode :>> ", vnode);
  let node = null;
  if (isPlainObject(vnode)) {
    const { type, key, props } = vnode;
    if (typeof type === "function") {
      // console.log("type.prototype :>> ", type.prototype);
      node = type.prototype.isReactComponent
        ? updateClassComponent(vnode)
        : updateFunctionComponent(vnode);
      console.log("createNode function :>> ", node);
    } else if (typeof type === "string") {
      node = document.createElement(type);
    } else if (typeof type === "object") {
      node = createNode(type);
    } else {
      // vnode为对象, type 为空, 为Fragement节点
      node = document.createDocumentFragment();
    }

    key && (node.key = key);
    // 更新节点属性
    updateNodeProps(node, props);
  } else {
    // 传入的vnode为基础类型 字符串, 数字, 布尔值等(非{key, props, ref}格式对象).
    node = document.createTextNode(vnode);
    console.log("基础类型 node :>> ", node);
  }

  return node;
}

// function updateClassComponent(vnode) {
//   console.log("classComponent :>> ", vnode);
//   const { type, props, ref, key } = vnode;
//   const instance = new type(props);
//   const vvnode = instance.render();
//   key && (vvnode.key = key);
//   ref && (vvnode.ref = ref);

//   console.log("updateClassComponent vvnode :>> ", vvnode);
//   return createNode(vvnode);
// }

// 暗号： 加蓬
function updateClassComponent(fiber) {
  const {type, props} = fiber;
  let instance = new type(props);
  const vvnode = instance.render();
  const children = [vvnode];
  reconcileChildrenFiber(fiber, children);
}

// function updateFunctionComponent(vnode) {
//   const { type, props, ref, key } = vnode;
//   const vvnode = type(props);
//   ref && (vvnode.ref = ref);
//   key && (vvnode.key = key);
//   return createNode(vvnode);
// }

function updateFunctionComponent(fiber) {
  const {type, props} = fiber;
  const children = [type(props)];
  reconcileChildrenFiber(fiber, children);
}

// function reconcileChildren(children, parentNode) {
//   for (let i = 0, len = children.length; i < len; i++) {
//     const element = children[i];
//     if (Array.isArray(element)) {
//       element.forEach((item) => {
//         render(item, parentNode);
//       });
//     } else {
//       render(element, parentNode);
//     }
//   }
// }

// 更新props属性值
function updateNodeProps(node, props) {
  Object.keys(props).forEach((propsName) => {
    if (propsName !== "children") {
      node[propsName] = props[propsName];
    }
  });
}

/**
 * fiber 架构
 *    child 第一个子元素
 *    sibling 下一个兄弟元素 fiber
 *    return 父fiber
 *    node  真实dom
 *    props 属性值
 *    base: 上一次更新是的fiber
 *    effectTag 标记要执行的操作类型（删除，插入， 更新）
 * @param {Fiber} workInProgressFiber   Fiber -> chid -> sibling
 * @param {Array} children
 */
function reconcileChildrenFiber(workInProgressFiber, children) {
  // 构建fiber架构
  let prevSibling = null;
  console.log('reconcileChildrenFiber fiber:>> ', workInProgressFiber);
  // console.log('reconcileChildrenFiber children.length:>> ', children.length);

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    let newFiber = {
      type: child.type,
      props: child.props,
      node: null,
      base: null,
      return: workInProgressFiber,
      effectTag: PLACEMENT,
    };
    // 形成一个链表结构
    if (i === 0) {
      // console.log('workInProgressFiber i === 0:>> ', workInProgressFiber);
      workInProgressFiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
  }
}

function updateHostComponent(fiber) {
  if (!fiber.node) {
    fiber.node = createNode(fiber);
  }

  // 协调子元素
  const { children } = fiber.props;
  reconcileChildrenFiber(fiber, children);
  // console.log("fiber :>> ", fiber);
}

function performUnitOfWork(fiber) {
  // 执行当前任务
  const { type } = fiber;

  if (typeof type === "function") {
    type.prototype.isReactComponent
      ? updateClassComponent(fiber)
      : updateFunctionComponent(fiber);
  } else {
    // 原生标签
    updateHostComponent(fiber);
  }

  // 获取下一个子任务 fiber
  // console.log('performUnitOfWork fiber :>> ', fiber);
  if (fiber.child) {
    return fiber.child;
  }

  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    // 没有兄弟，找当前节点父节点的兄弟节点
    // return指当前fiber的父节点
    nextFiber = nextFiber.return;
  }
}

function workLoop(deadLine) {
  // 有下一个任务， 并且当前帧没有结束
  // deadLine.timeRemaining() 时间模拟， 源码中实现了一套时间模拟
  while (nextUnitOfWork && deadLine.timeRemaining() > 1) {
    // console.log('nextUnitOfWork  before:>> ', nextUnitOfWork);
    // 执行当前任务
    // 获取下一个子任务
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // console.log('nextUnitOfWork  after:>> ', nextUnitOfWork);

  }
  if (!nextUnitOfWork && wipRoot) {
    // 提交
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
