/* eslint-disable */
import ReactCurrentOwner from './ReactCurrentOwner';

const RESERVED_PROPS = {
  __self: true,
  __source: true,
  key: true,
  ref: true
}
let REACT_ELEMENT_TYPE = 0xeac7;

const undef = void 0;
// 暗号: 喀麦隆
export function createElement(type, config, children) {
  const props = Object.create(null);
  let key = null; let ref = null; let self = null; let source = null;

  if(config != null) {
    if (hasValidRef(config)) {
      ref = config.ref
    }

    if (hasValidKey(config)) {
      key = '' + config.key
    }
  }

  // TODO: ?????
  // self = config.__self === undefined ? null : config.__sef;  source = config.__source === undefined ? null : config.__source;

  // 把config中非保留配置项(ref, key, __self, __source), 配置到props中
  let propName;
  for (propName in config) {
    if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  }

  // children
  const childrenLength = arguments.length - 2;
  props.children = []
  if (childrenLength >= 1) {
    Array.from(arguments).slice(2).forEach((child, i) => {
      props.children[i] = child
    })
  }

  // console.log('defaultProps :>> ', type);
  // default Props
  if(type && type.defaultProps) {
    const defaultProps = type.defaultProps
    for (propName in defaultProps) {
      if (props[propName] === undef) {
        props[propName] = defaultProps[propName]
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)
}

function ReactElement(type, key, ref, self, source, owner, props) {
  const element = {
    // $$type: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    // _owner: owner
  }
  /**
   * element.store = {}
   * Object.defineProperty(element.store, 'validated', { writeable: true, value: false})
   * Object.defineProperty(element,'_self', {value: self})
   * Object.defineProperty(element, '_source', {value: source})
   * 
   */
  return element
}

function hasValidRef(config) {
  // config.ref !== undefined
  return config.ref !== undef
}
function hasValidKey(config) {
  return config.key !== undef;
}