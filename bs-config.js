


module.exports = {
    injectChanges: true,
    files: [
        "./src/**/*.{html,htm,css,js}",
        "./index.html"
    ],
    snippetOptions: {
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) {
                return (`${snippet}
                    <script>
                    ${process.env.NODE_ENV.trim() === 'dev' ?
                        `var DEV_ROUTES = {
                            userInfo: "./json/get_user_info.json",
                            riders: "./json/get_riders.json",
                        }` : `var env='${process.env.NODE_ENV.trim()}'`
                    }
                    </script>
                ${match}`)
            }
        }
    }
}
