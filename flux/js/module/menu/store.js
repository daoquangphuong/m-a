var _ = require('underscore');
var $ = require('jquery');

var Freezer = require('freezer-js');

var storeData = {
    topLeft: [
        {name: 'CONFIG', href: '/config'},
        {
            name: 'TEST',
            href: '/test',
            child: [
                {name: 'Send and Receive', href: '/test/send_and_receive'}
            ]
        }
    ]
};

var store = new Freezer(storeData);

store.on('beforeAll', function () {
    console.log(arguments);
});

store.on('afterAll', function () {
    //console.log(arguments);
});

module.exports = store;