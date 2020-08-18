import React from 'react'
import HomePage from './HomePage'
import _404Page from './404'
import Login from './Login'
import User from './User'

// import { 
//   Link, 
//   BrowserRouter as Router, 
//   Switch,
//   Route,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   withRouter,
//   Prompt,
// } from 'react-router-dom'

import { 
  Link, 
  BrowserRouter as Router, 
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  Prompt 
} from '../../k-router-dom'



export default function Index(props) {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/user">User</Link>&nbsp;
        <Link to="/login">Login</Link>&nbsp;
        <Link to="/product/123">Product</Link>&nbsp;
        <Link to="/404">404</Link>
      
        {/* 独占路由  
            渲染与地址匹配的第一个地节点或者redirect 
            如果没有Switch, 不管有没有匹配, 都会渲染children
        */}
        <Switch>
          {/* exact 精确匹配 */}
          <Route 
            exact 
            path="/" 
            // children={children}
            component={HomePage}
            render={render}
          > 
          {/* &nbsp;children 1010 */}
          </Route>
          {/* component 不要写成内联函数形式, 会不行卸载, 重建 */}
          <Route path="/user" component={User}>
          </Route>
          <Route path="/login" component={Login}></Route>
          {/* mathPath 正则校验 */}
          {/* <Route path="/product/:id?" component={Products}></Route> */}
          {/* <Route path="/product/:id?" render={() => <ProductHook/>}></Route> */}
          <Route path="/product/:id?" render={() => <ProductClass/>}></Route>
          <Route component={_404Page}></Route>
        </Switch>
      </Router>
    </>
  )
}



function children(props) {
  return <div>children</div>
}

function render(props) {
  return  <div>render</div>
}

function Products({match}) {
  const { params, url } = match;
  const { id } = params;
  console.log('id :>> ', id);
  return (
    <div>
      <h3>Product</h3>
      <p>{id}</p>
      <div>
        <h4>嵌套路由</h4>
        <Link to={url + '/detail'}>detail</Link>
        <Route path={url + '/detail'} component={detail} ></Route>
      </div>
    </div>
  )
}

function ProductHook() {

  const history = useHistory()
  console.log('history :>> ', history);

  const location = useLocation()
  console.log('location :>> ', location);
  
  const match = useRouteMatch()
  console.log('match :>> ', match);

  const params = useParams()
  console.log('_params :>> ', params);

  const { url } = match;
  const { id } = params ;
  return (
    <div>
      <h3>Product Hook</h3>
      <p>{id}</p>
      <div>
        <h4>嵌套路由</h4>
        <Link to={url + '/detail'}>detail</Link>
        <Route path={url + '/detail'} component={detail} ></Route>
      </div>
    </div>
  )
}


@withRouter
class ProductClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirm: true
    }
  }
  render() {
    // console.log(this.props)
    const { params, url } = this.props.match;
    const { id } = params;
    return (
      <div>
        <h3>Product Hook</h3>
        <p>{id}</p>
        <div>
          <Prompt
            when={this.state.confirm}
            message="Are you sure you want to leave?"
          >
          </Prompt>
          <h4>嵌套路由</h4>
          <Link to={url + '/detail'}>detail</Link>
          <Route path={url + '/detail'} component={detail} ></Route>
        </div>
      </div>
    )
  }
}


function detail(props) {
  console.log(props)
  return  <div>detail</div>
}


