"use strict";

var React = require('react');
var classNames = require('classnames');
var _ = require('underscore');

// store
var store = require('../store');

var Loading = React.createClass({
    getInitialState(){
        var iconList = ['fa-spinner', 'fa-circle-o-notch', 'fa-cog', 'fa-refresh'];
        var icon = iconList[_.random(0, iconList.length - 1)];
        return {
            icon: icon
        }
    },
    onUpdate(){
        this.forceUpdate();
    },
    componentWillMount(){

    },
    componentDidMount(){
        store.on('update', this.onUpdate);
    },
    componentWillUnmount(){
        store.off('update', this.onUpdate);
    },
    render(){
        var icon = this.state.icon;
        var state = store.get();
        var loadingClass = classNames({
            'loading-screen': true,
            'active': state.stack.length > 0
        });
        return (
            <div className={loadingClass}>
                <div className="wrapper-blur">
                    <div className="blur"></div>
                </div>
                <div className="icon">
                    <i className={`fa fa-5x ${icon} fa-spin`}/>
                </div>
            </div>
        )
    }
});

module.exports = Loading;