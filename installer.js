var globalModule = {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babelify": "^7.2.0",
    "browserify": "^13.0.0",
    "watchify": "^3.7.0"
};

require('package-script').spawn(Object.keys(globalModule).map(function (name) {
    return {
        command: "npm",
        args: ["install", "-g", name]
    };
}));
