module.exports = {
    injectChanges: true,
    files: [
        "./src/**/*.{html,htm,css,js}",
        "./*.{html,js,css}"
    ],
    snippetOptions: {
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) {
                return (`${snippet}
                    <script>
                        var env='${process.env.NODE_ENV.trim()}'
                    </script>
                ${match}`)
            }
        }
    }
}
