module.exports = {
    resolve(link){
        var url = require('url');
        var queryString = require('querystring');
        link = url.parse(link);
        var query = queryString.parse(link.query || '');
        query.httpSniffer = 'bypass';
        link.query = query;
        link.search = queryString.stringify(query);
        return link.format();
    }
};