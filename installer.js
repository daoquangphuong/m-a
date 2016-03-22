var globalModule = {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babelify": "^7.2.0",
    "browserify": "^13.0.0",
    "del": "^2.2.0",
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.0",
    "gulp-if": "^2.0.0",
    "gulp-uglify": "^1.5.3",
    "gulp-uglifycss": "^1.0.6",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^3.7.0"
};

require('package-script').spawn(Object.keys(globalModule).map(function (name) {
    return {
        command: "npm",
        args: ["install", "-g", name]
    };
}));
