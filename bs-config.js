


module.exports = {
    snippetOptions: {
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) {
                return `${snippet}${match}<script>var env='${process.env.NODE_ENV.trim()}'</script>`;
            }
        }
    }
}
