


module.exports = {
    injectChanges: false,
    files: [
        "./dist/*.{html,htm,css,js}"
    ],
    server: {
        baseDir: './dist',
        index: 'index.prod.html'
    },
    middleware: {
        0: null      
    }
}
