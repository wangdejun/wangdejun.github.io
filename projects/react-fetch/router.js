import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import GithubCardList from './src/githubcardlist.js';

const router = ({ children, location }) => (
  <div>
    <ReactCSSTransitionGroup
        component="div" 
        transitionName="swap"
        transitionEnterTimeout={5}
        transitionLeaveTimeout={5}
        >
        {React.cloneElement(children, {
          key: location.pathname
        })}
    </ReactCSSTransitionGroup>  
  </div>
)
render((
<Router history={browserHistory}>
    <Route path="/" component={ router }>
            <IndexRoute component={ GithubCardList } />
        </Route>
</Router>
), document.getElementById('router'))


