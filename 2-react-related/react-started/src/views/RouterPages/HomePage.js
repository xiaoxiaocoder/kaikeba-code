import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom';
import Redirect from '../../k-router-dom/Redirect';

export default class HomePage extends Component {

  
  render() {
    return <Redirect to={{ pathname: '/welcome'}}></Redirect>
    console.log(this.props)
    return (
      <div>
        HomePage
      </div>
    )
  }
}
 