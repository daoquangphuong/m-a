"use strict";

(function () {
    try {
        require('./core/q_hook')();
        require('./core/react_hook')();
        require('./core/jquery_hook')();
        var React = require('react');
        var ReactDOM = require('react-dom');
        var reactRouter = require('react-router');

        //component

        var App = require('./module/app/com/app');
        var Router = reactRouter.Router;
        var Route = reactRouter.Route;
        var browserHistory = reactRouter.browserHistory;

        var routeSetup = (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="config" component={App}/>
                    <Route path="test">
                        <Route path="send_and_receive" component={App}/>
                    </Route>
                </Route>
            </Router>
        );

        ReactDOM.render(routeSetup, document.getElementById('app'));
    }
    catch (err) {
        console.error(err);
    }
}).call();
