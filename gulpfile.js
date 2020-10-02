const { src, dest }  = require("gulp");
const minifyCSS = require("gulp-minify-css");

function minifyCss() {

    return src('style.css', { allowEmpty: true }) 
        .pipe(minifyCSS())
        .pipe(dest('css'))
}

exports.default = minifyCss;