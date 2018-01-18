


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
                        var DEV_ROUTES = {
                            userInfo: "./json/get_user_info.json",
                            riders: "./json/get_riders.json",
                        }
                    </script>               
                ${match}`)
            }
        }
    }
}
