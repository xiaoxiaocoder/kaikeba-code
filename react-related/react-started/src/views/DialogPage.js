import React, { Component } from 'react';
import Dialog from '../components/dialog'

class DialogPage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      show: false
    }
  }
  render() {
    const { show } = this.state
    return (
      <div>
        <button onClick={() => this.setState({show: !show })}>Toggle Dialog</button>
        { show && <Dialog /> }
      </div>
    );
  }
}

export default DialogPage;
