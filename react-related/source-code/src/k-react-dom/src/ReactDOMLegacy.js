// import  { updateContainer } from '../../k-react-reconciler/ReactFiberReconciler'
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function render(element, container, callback) {
  console.log("render >>", element, typeof element);
  const node = createNode(element);
  container.appendChild(node);
}

// function legacyRenderSubtreeOntoContainer(parentComponent, children, container, forceHydrate, callback){

//   if(typeof callback === 'function') {}
//   updateContainer(children, container, parentComponent, callback)

// }

/**
 * 返回DOM节点
 * 
 * export default function () {
    return (
      <div>
        <h1>hello</h1>
        world
        <>123</>
        <ClassComponent name="Class" theme="pink" />
        <FunctionComponent name="Functional"/>
        <ul>
          {[1,2,3].map(item => <li key={item}>{item}</li>) }
        </ul>
      </div>
    )
  }
 */
function createNode(vnode) {
  console.log("createNode :>> ", vnode);
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

    // 生成子节点
    reconcileChildren(props.children, node);
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

function updateClassComponent(vnode) {
  console.log("classComponent :>> ", vnode);
  const { type, props, ref, key } = vnode;
  const instance = new type(props);
  const vvnode = instance.render();
  key && (vvnode.key = key);
  ref && (vvnode.ref = ref);

  console.log("updateClassComponent vvnode :>> ", vvnode);
  return createNode(vvnode);
}

function updateFunctionComponent(vnode) {
  const { type, props, ref, key } = vnode;
  const vvnode = type(props);
  ref && (vvnode.ref = ref);
  key && (vvnode.key = key);
  return createNode(vvnode);
}

function reconcileChildren(children, parentNode) {
  for (let i = 0, len = children.length; i < len; i++) {
    const element = children[i];
    if (Array.isArray(element)) {
      element.forEach((item) => {
        render(item, parentNode);
      });
    } else {
      render(element, parentNode);
    }
  }
}

// 更新props属性值
function updateNodeProps(node, props) {
  Object.keys(props).forEach((propsName) => {
    if (propsName !== "children") {
      node[propsName] = props[propsName];
    }
  });
}
