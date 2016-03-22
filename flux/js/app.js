"use strict";

(function () {
    try {
        if (typeof unsafeWindow !== 'undefined') {
            if (unsafeWindow.needReload) {
                return window.location.reload();
            }
            unsafeWindow.needReload = true;
        }
        require('./core/q_hook')();
        require('./core/react_hook')();
        require('./core/jquery_hook')();
        var React = require('react');
        var ReactDOM = require('react-dom');
        var reactRouter = require('react-router');

        //component

        var App = require('./module/app/com/app');
        var HelloWorld = require('./module/hello_world/com/hello_world');
        var Router = reactRouter.Router;
        var Route = reactRouter.Route;
        var browserHistory = reactRouter.browserHistory;

        var routeSetup = (
            <Router history={browserHistory}>
                <Route path="/*" component={App}>
                </Route>
            </Router>
        );

        ReactDOM.render(routeSetup, document.getElementById('app'));
    }
    catch (err) {
        console.error(err);
    }
}).call();
