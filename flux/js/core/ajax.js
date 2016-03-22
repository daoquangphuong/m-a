var $ = require('jquery');
var urlBypass = require('./url_bypass');
var q = require('q');

module.exports = {
    get(url){
        return q.Promise((resolve, reject)=> {
            $.get(urlBypass.resolve(url))
                .done((html)=> {
                    resolve(html);
                })
                .fail((err)=> {
                    reject(err);
                })
        })
    }
};