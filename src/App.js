import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router  , Switch, Redirect,  Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Mine from './pages/Mine'
import Deatail from './pages/Detail'
import Error from './pages/Error'
import Search from './components/Search';
// import Address from './components/Address';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className="content">
              <Switch>
                <Redirect exact from="/" to="home"></Redirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/mine" component={Mine}></Route> 
                <Route path="/search" component={Search}></Route>
                {/* <Route path="/address" component={Address}></Route>                 */}
                <Route path="/detail/:id" component={Deatail}></Route>  {/* 详情页*/}
                <Route path="/*" component={Error}></Route>   {/* 404页面 */}          
              </Switch>
            </div>

            <div className="footer">
                <ul>
                    <NavLink exact className="tar" activeClassName="active" to="/home">
                      <li>
                        <b className="b1"></b>
                        <span>首页</span>
                      </li>
                    </NavLink>
                    <NavLink exact className="tar" activeClassName="active" to="/cart">
                      <li>
                        <b className="b2"></b>
                        <span>购物车</span>
                      </li>
                    </NavLink>
                    <NavLink exact className="tar" activeClassName="active" to="/mine">
                      <li>
                        <b className="b3"></b>
                        <span>我的</span>
                      </li>
                    </NavLink>
                </ul>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
