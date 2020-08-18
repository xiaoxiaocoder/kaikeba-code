/* eslint-disable */
import React from 'react';
// import ContextPage from './views/ContextPage'
// import HocPage from './views/HocPage'
import FormPage from './views/FormPage'
import RcFormPage from './views/FormPage/RcFormPage'
// import DialogPage from './views/DialogPage'
import ReduxPage from './views/ReduxPages/ReduxPage'
import HookPage from './views/HooksPages/HookPage'
import ReactReduxPage from './views/ReduxPages/ReactRedux'
import ReduxHookPage from './views/HooksPages/ReduxHookPage'
import RouterPages from './views/RouterPages'

import store from './k-redux/index'
// import { Provider } from 'react-redux'
import { Provider } from './k-redux/react-redux'

export default function App(props) {
  return (
    <div>
        {/* <ContextPage /> */}
        {/* <HocPage /> */}
        {/* <FormPage /> */}
        {/* <RcFormPage /> */}
        {/* <DialogPage /> */}
        <ReduxPage />
        {/* <HookPage /> */}
          {/* <ReactReduxPage /> */}
        {/* <Provider store={store}>
          <ReduxHookPage />
        </Provider> */}
        {/* <RouterPages /> */}
    </div>
  );
}
