import React, { Component } from 'react';
import Dialog from '../components/dialog'

class DialogPage extends Component {
  state= {
    show: false
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
