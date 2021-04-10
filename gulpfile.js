const {src, dest, watch, parallel, series} = require("gulp");
const scss = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const del = require("del");
const svgSprite = require("gulp-svg-sprite");
const fileinclude = require("gulp-file-include");
function filesInclude() {
  return src(["./app/html/pages/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("./app"))
    .pipe(browserSync.stream());
}

function svgSprites() {
  return src("app/images/svg/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )

    .pipe(dest("app/images"));
}
function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false,
  });
}
function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({outputStyle: "compressed"}))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        grid: false,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}
function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/slick-carousel/slick/slick.js",
    "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js",
    "node_modules/mixitup/dist/mixitup.js",
    "app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}
function images() {
  return src("app/images/**/*.*")
    .pipe(
      imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [{removeViewBox: true}, {cleanupIDs: false}],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}
function build() {
  return src(["app/**/*.html", "app/css/style.min.css", "app/js/main.min.js"], {
    base: "app",
  }).pipe(dest("dist"));
}
function cleanDist() {
  return del("dist");
}
function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*js", "!app/js/main.min.js"], scripts);
  watch("./app/html/**/*.html", filesInclude);
}
exports.filesInclude = filesInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.build = series(cleanDist, images, build);
exports.cleanDist = cleanDist;

exports.default = parallel(
  styles,
  filesInclude,
  scripts,
  browsersync,
  svgSprites,
  watching
);
