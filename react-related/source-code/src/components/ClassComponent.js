import React, { Component } from 'react'

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.name} Component
        <h2>{this.props.msg}</h2>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  msg: '默认父组件传来的值'
}

export default ClassComponent

