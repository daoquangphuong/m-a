var _ = require('underscore');
var $ = require('jquery');

var Freezer = require('freezer-js');

var storeData = {};

var store = new Freezer(storeData);

store.on('init', function (html, dom) {
    var state = store.get();
    if (!_.isEmpty(state)) {
        return;
    }
    var hrefFormat = function (href) {
        var url = require('url');
        href = url.parse(href);
        if (href.path) {
            return href.path;
        }
        return href.format();
    };
    var menu = [];
    var ul = dom.find('.tn-wrapper .tn-header .tn-gnav > ul').eq(0);
    if (!ul.exists()) {
        console.log("not found ul");
    }
    var firstLevel = ul.find('> li').get();
    firstLevel.forEach((li)=> {
        li = $(li);
        var a = li.find('>a').eq(0);
        var item = {};
        item.name = a.text().trim();
        item.href = hrefFormat(a.attr('href'));
        var secondLevel = li.find('ul > li').get();
        if (secondLevel.length > 0) {
            item.child = [];
            secondLevel.forEach((li)=> {
                li = $(li);
                var a = li.find('>a').eq(0);
                item.child.push({
                    name: a.text().trim(),
                    href: hrefFormat(a.attr('href'))
                });
            });
        }
        menu.push(item);
    });
    state.set('topLeft', menu);
});

store.on('beforeAll', function () {
    console.log(arguments);
});

store.on('afterAll', function () {
    //console.log(arguments);
});

module.exports = store;