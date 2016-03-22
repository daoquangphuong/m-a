module.exports = function () {
    var q = require('q');
    q.longStackSupport = true;
    q.onerror = function (err) {
        console.info("Q Hook Detect Q.Promise Error: ");
        console.error(err);
    };
};