
const emptyObject = {}

function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;

  this.updater = updater // || ReactNoopUpdateQueue
}

Component.prototype.isReactComponent = []
Component.prototype.setState = function(partialState, callback) {
  console.log('setState :>> ', partialState);
  this.updater.enQueueSetState(this, partialState, callback, 'setState');
}
Component.prototype.forceUpdate = function(callback) {
  console.log('forceUpdate :>> ', callback);
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
}

// TODO: 为什么没有使用 call, apply来实现原型链继承
function ComponentDummy() {
  ComponentDummy.prototype = Component.prototype
}

// 与Component 主要区别是 自动进行shoduleComponentUpdate
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater; // || ReactNoopUpdateQueue
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy())
pureComponentPrototype.constructor = PureComponent
// ????
Object.assign(pureComponentPrototype, Component.prototype)
pureComponentPrototype.isPureReactComponent = true

export {
  Component,
  PureComponent
};