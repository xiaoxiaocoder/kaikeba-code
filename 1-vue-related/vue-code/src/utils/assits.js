/**
 * 查询给定组件的所有指定子孙组件
 * @param {Vue} context Vue实例
 * @param {String} compnentName 组件名称
 */
function findComponentsDownward(context, compnentName){
  return context.$children.reduce((components, child) => {
    if(child.$options.name === compnentName) components.push(child)
    const foundChilds = findComponentsDownward(child, compnentName)
    return components.concat(foundChilds)
  }, [])
}

function findComponentDownward(context, compnentName) {
  let component = null
  let len = context.$children
  for (let i = 0; i < len; i++) {
    const child = context.$children[i];
    if (child.$options.name === compnentName) {
      component = child
    } else {
      component = findComponentDownward(child, compnentName)
    }
    if (component) {
      break
    } 
  }
  return component
}

function findComponentUpWard(context, compnentName) {
  let component = null
  for (let i = 0; i < context.$parent.length; i++) {
    const parent = context.$parent[i];
    if (parent && parent.$options.name === compnentName) {
      component = parent
    } else {
      component = findComponentUpWard(parent, compnentName)
    }
    if(component) break
  }
  return component
}

function findComponentsUpWard(context, compnentName) {
  let components = []
  context.$parent.forEach(parent => {
    if (parent.$options.name === compnentName) components = components.concat(parent)
    const comps = findComponentsUpWard(parent, compnentName)
    if (comps.length) {
      components.concat(comps)
    }
  })
  return components
}

export {
  findComponentsDownward,
  findComponentDownward,
  findComponentUpWard,
  findComponentsUpWard
}