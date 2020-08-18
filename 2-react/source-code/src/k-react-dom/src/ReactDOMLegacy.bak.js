// import  { updateContainer } from '../../k-react-reconciler/ReactFiberReconciler'

export function render(element, container, callback) {
  console.log(element, typeof element)
  // 标签(对象), 
  // 文本(字符串)
  // 组件(方法 class组件, funcation组件)
  if(['string', 'number', 'boolean'].indexOf(typeof element) >=0) { // undefined, null
    // 当元素为对象类型时
    console.log('render string element:>> ', element);
    const node = createTextNode(element, container)
    return node;
  } else if (typeof element === 'object') {
    const { type, props } = element
    let vnode = Object.create(null)
    console.log('render type :>> ', typeof type, type);
    // type 取值: function,  文本, 空()
    if (typeof type === 'function') {
      console.log('render function type prototype :>> ', type.prototype.isReactComponent);
      if (type.prototype.isReactComponent) {
        vnode = new type(props).render()
      } else {
        vnode = type(props)
      }
    } else {
      vnode = element
    }
    console.log('vnode :>> ', vnode);
    if(Array.isArray(vnode)){
      vnode.forEach(vvnode => {
        console.log('vvnode :>> ', vvnode);
        const node = createNode(vvnode)
        container.appendChild(node);
      })
    } else {
      const node = createNode(vnode)
      container.appendChild(node);
    }
  }
  
}



// function legacyRenderSubtreeOntoContainer(parentComponent, children, container, forceHydrate, callback){

//   if(typeof callback === 'function') {}
//   updateContainer(children, container, parentComponent, callback)

// }

/**
 * 返回DOM节点
 */
function createNode(vnode) {
  console.log('createNode :>> ', vnode);
  const {type, key, props: { children }} = vnode;
  let parentContainer = Object.create(null)
  if (typeof type === 'string') {
    parentContainer = document.createElement(type);
  } else if(!type) {
    parentContainer = document.createDocumentFragment();
  }
  parentContainer.key = key;
  if(children.length) {
    children.forEach(child => {
      console.log('crateNode child :>> ', child, parentContainer);
      const childNode = render(child, parentContainer)
      console.log('crateNode child node :>> ', childNode);

      if (childNode) {
        parentContainer.appendChild(childNode)
      }
    })
  }
  return parentContainer
}

// eslint-disable-next-line
function createChildNode(child, container) {

}

function createTextNode(text, container) {
 container.appendChild(document.createTextNode(text))
}