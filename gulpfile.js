

 const { src, dest, watch, series} = require('gulp');

 const sass = require('gulp-sass')(require('sass'));


const imagemin = require('gulp-imagemin');




function css( done ) {
    src('src/scss/app.scss') // Identificar el archivo principal
         .pipe( sass()) // Compilar SASS
         .pipe( dest('build/css')) // Exportarlo o guardarlo en una ubicación
    done();
 }

function dev( ) {
    watch('src/scss/**/*.scss', css);
}

function imagenes(done) {
    src('src/img/**/*')
        .pipe( imagemin({ optimizationLevel: 3}) )
        .pipe( dest('build/img') )
    done();
}

exports.css = css;
exports.dev = dev;

exports.imagenes = imagenes;
