import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link }from "react-router-dom";
import Apage from './components/Apage';
import Bpage from './components/Bpage';
import Cpage from './components/Cpage';
import RouterTest from './components/router-test';
import "./assets/style/App.css";
//导出
class App extends Component { 
  render() {
    return (
      <Router>
        <div>
          <RouterTest />
          <Route exact path="/" component={Apage} />
          <Route path="/Bpage" component={Bpage} />
          <Route path="/Cpage" component={Cpage} />
        </div>
      </Router>
    )
  }
}
export default App;