import React, { Component } from 'react'
import RouterContext from './RouterContext';

// 暗号： 尼日尔
class Prompt extends Component {
  static contextType = RouterContext

  enable(message) {
    if (this.unblock) this.unblock();
    this.unblock = this.context.history.block(message);
  }
  disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  }

  componentWillMount() {
    if (this.props.when) this.enable(this.props.message);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message)
        this.enable(nextProps.message);
    } else {
      this.disable();
    }
  }

  componentWillUnmount() {
    this.disable();
  }


  render() {
    return null
  }
}

export default Prompt
