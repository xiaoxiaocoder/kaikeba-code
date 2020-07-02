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

export {
  findComponentsDownward
}