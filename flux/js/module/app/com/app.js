"use strict";

var React = require('react');
var $ = require('jquery');
var _ = require('underscore');
var reactRouter = require('react-router');
var ajax = require('../../../core/ajax');
// component
var Menu = require('../../menu/com/menu');
var App = React.createClass({
    render(){
        return (
            <div className="wrapper">
                <Menu/>
                <Menu.Fake/>
                <div className="container">
                    <form>
                        <button type="button" className="btn btn-default">default</button>
                        <button type="button" className="btn btn-primary">primary</button>
                        <button type="button" className="btn btn-success">success</button>
                        <button type="button" className="btn btn-info">info</button>
                        <button type="button" className="btn btn-warning">warning</button>
                        <button type="button" className="btn btn-danger">danger</button>
                    </form>
                    <br/>
                    <form>
                        <button type="button" className="btn btn-default-outline">default</button>
                        <button type="button" className="btn btn-primary-outline">primary</button>
                        <button type="button" className="btn btn-success-outline">success</button>
                        <button type="button" className="btn btn-info-outline">info</button>
                        <button type="button" className="btn btn-warning-outline">warning</button>
                        <button type="button" className="btn btn-danger-outline">danger</button>
                    </form>
                    <br/>
                    <form>
                        <button type="button" className="btn btn-pill btn-default-outline">default</button>
                        <button type="button" className="btn btn-pill btn-primary-outline">primary</button>
                        <button type="button" className="btn btn-pill btn-success-outline">success</button>
                        <button type="button" className="btn btn-pill btn-info-outline">info</button>
                        <button type="button" className="btn btn-pill btn-warning-outline">warning</button>
                        <button type="button" className="btn btn-pill btn-danger-outline">danger</button>
                    </form>
                </div>
                <div id="container" className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;

