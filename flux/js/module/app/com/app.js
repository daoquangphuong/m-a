"use strict";

var React = require('react');
var $ = require('jquery');
var _ = require('underscore');
var reactRouter = require('react-router');
var ajax = require('../../../core/ajax');
// store
var loadingStore = require('../../loading/store');
var menuStore = require('../../menu/store');
// component
var Link = reactRouter.Link;
var Menu = require('../../menu/com/menu');
var App = React.createClass({
    getPage(){
        try {
            var url = window.location.href;
            loadingStore.trigger('show');
            return ajax.get(url)
                .then((html)=> {
                    menuStore.trigger('init', html, $(html).wrapAll('html').parent());
                }, (err)=> {
                    console.info(`Can't get html from url: "${url}"`);
                    console.error(err);
                })
                .done(()=> {
                    loadingStore.trigger('hide');
                });
        } catch (e) {
            console.log(e);
        }
    },
    componentDidMount (){
        this.getPage();
    },
    componentDidUpdate (prevProps){
        if (!_.isEqual(this.props.params, prevProps.params)) {
            this.getPage();
        }
    },
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

