import React, { Component } from 'react';
import './App.css';
// import ContextPage from './views/ContextPage'
// import HocPage from './views/HocPage'
// import FormPage from './views/FormPage'
import RcFormPage from './views/FormPage/RcFormPage'

export default class App extends Component {

  render () {
    return (
        <>
          {/* <ContextPage /> */}
          {/* <HocPage /> */}
          {/* <FormPage /> */}
          <RcFormPage />
        </>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
