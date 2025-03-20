import React, { Component, lazy, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { HeaderBar, NavBar, NotFound } from './components';
import About from './About';

const Products = withRouter(
  lazy(() => import(/* webpackChunkName: "products" */ './products/Products'))
);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>hahaha
               总算进来了。
               剩下的是 HTML和 js 后台代码编写。
               azure 上搭建 sqlsever搭建。以及 再js怎么连接这个sql服务器和访问。
          </h2>
          </div>
          {/* <div><img src="../tupian/xiangmu1.png" alt="作业" /></div> */}
      </div>
    );
  }
}

export default App;
