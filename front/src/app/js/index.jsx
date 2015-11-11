
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import ReactDom from 'react-dom';
import Home from './components/home.jsx';
import Test from './components/test.jsx';
import Test2 from './components/test2.jsx';
import App from './app.jsx';


render((
  	<Router>
    	<Route path="/" component={App}>
    		<Route path="home" component={Home} />
      		<Route path="test" component={Test} />
      		<Route path="test2" component={Test2} />
    	</Route>
  	</Router>
), document.body)