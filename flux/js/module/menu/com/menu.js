var React = require('react');
var reactRouter = require('react-router');
var classNames = require('classnames');
// store
var store = require('../store');

// component
var NavLink = require('react-router-active-component')('li', {link: false});
var Link = reactRouter.Link;

var MenuFake = React.createClass({
    render(){
        return <div className="menu-fake"></div>
    }
});

var Menu = React.createClass({
    onUpdate(){
        this.forceUpdate();
    },
    componentDidMount(){
        store.on('update', this.onUpdate);
    },
    componentWillUnmount(){
        store.off('update', this.onUpdate);
    },
    render(){
        var state = store.get();
        var topLeft = state.topLeft;
        if (!topLeft) {
            return <div></div>
        }
        var topLeftMenu = (
            <ul className="nav navbar-nav">
                {topLeft.map((li, key)=> {
                    var child;
                    if (li.child) {
                        child = (
                            <ul key="" className="nav-child list-unstyled container-fluid">
                                {
                                    li.child.map((liChild, key)=> {
                                        return (
                                            <NavLink key={key}
                                                     to={liChild.href}
                                                     className="col-md-4 col-lg-3"
                                                     activeClassName="active">
                                                <Link to={liChild.href} onClick={this.onUpdate}>
                                                    {liChild.name}
                                                </Link>
                                            </NavLink>
                                        );
                                    })
                                }
                            </ul>
                        );
                    }
                    return (
                        <NavLink key={key}
                                 className={classNames({'has-child':li.child && li.child.length > 0})}
                                 to={li.href}
                                 activeClassName="active">
                            <Link to={li.href} onClick={this.onUpdate}>
                                {li.name}
                            </Link>
                            {child}
                        </NavLink>
                    )
                })}
            </ul>
        );
        return (
            <nav className="top-menu navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="javascript:void(0);">
                            <i className="fa fa-leaf"/> HDOnline.vn
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        {topLeftMenu}
                    </div>
                </div>
            </nav>
        );
    }
});

Menu.Fake = MenuFake;

module.exports = Menu;