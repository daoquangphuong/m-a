var Freezer = require('freezer-js');

var storeData = {
    stack: []
};

var store = new Freezer(storeData);

var loading = null;

var getLoading = function () {
    if (loading) return loading;
    var $ = require('jquery');
    if (!$('body > #loading').exists()) {
        $('body').prepend('<div id="loading"></div>');
    }
    var React = require('react');
    var ReactDom = require('react-dom');
    var Loading = require('./com/loading');
    return loading = ReactDom.render(<Loading/>, document.getElementById('loading'));
};

store.on('show', function () {
    store.get().stack.push();
});

store.on('hide', function () {
    store.get().stack.pop();
});

store.on('reset', function () {
    store.get().reset(storeData);
});

store.on('beforeAll', function () {
    getLoading();
    //console.log(arguments);
});

store.on('afterAll', function () {
    //console.log(arguments);
});

module.exports = store;