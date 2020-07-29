import React from 'react'
import { createPortal } from 'react-dom';
import './index.css'

export default class Dialog extends React.Component  {
  constructor(props) {
    super(props)
    const doc = window.document;
    this.node = doc.createElement("div");
    console.log(this.node)
    doc.body.appendChild(this.node);
  }

  componentWillUnmount() {
    this.node && window.document.body.removeChild(this.node)
  }

  render () {
      {/* 直接书写节点, 会默认在页面的父节点上
          实际中, 是希望改组件渲染在document.body节点上, 并在某些时刻从body节点上删除掉.
          此时, 可以使用createProtalAPI
       */}
    return createPortal(
      <div className="kkb-dialog">
        Dialog
      </div>, 
      this.node
    )
  }
}
