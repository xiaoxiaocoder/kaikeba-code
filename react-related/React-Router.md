

react-router, react-router-dom, react-router-native

https://reactrouter.com/web/guides/quick-start

```jsx
 <Router>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/user">About</Link>&nbsp;
    <Link to="/login">User</Link>&nbsp;
    <Link to="/404">Home</Link>
  
    // {* switch 独占路由 *}
    <Switch>
      // {* exact 精确匹配 *}
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/login" component={Login}></Route>
      <Route component={_404Page}></Route>
    </Switch>
  </Router>

```


- https://github.com/ReactTraining/history/blob/28c89f4091ae9e1b0001341ea60c629674e83627/docs/api-reference.md
- https://github.com/ReactTraining/history/blob/28c89f4091ae9e1b0001341ea60c629674e83627/docs/blocking-transitions.md