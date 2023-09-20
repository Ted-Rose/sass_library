const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const cssbeautify = require("gulp-cssbeautify");

function buildStyles() {
    return (
        src("sass/**/*.scss", "sass_library/**/*.scss")
            .pipe(sass({ outputStyle: "compressed" }))
            .pipe(purgecss({ content: ['*.html'] }))
            .pipe(cssbeautify()) // Add this line to format the CSS
            .pipe(dest("SubscriptionForm/src"))
    );
}

function watchTask() {
    watch(["sass/**/*.scss", "*.html"], series(buildStyles));
    watch(["sass_library/**/*.scss", "*.html"], series(buildStyles));
}

exports.default = watchTask;
