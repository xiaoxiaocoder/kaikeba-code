# React Redux

https://www.redux.org.cn/docs/react-redux/

Redux 官方提供的 React 绑定库。 具有高效且灵活的特性。

## 使用

### Provider

```js
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

```

### connect

`connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`

```js
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import {  Link } from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
```

排错