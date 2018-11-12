const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const env = app.get('env').replace(/\s/g, "");

let port = 8080;

app.set('json spaces', 40);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(env === 'dev') {
    const livereload = require('livereload');

    app.use(express.static(__dirname));
    app.use(express.static(path.join(__dirname,'node_modules')));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    var lrserver = livereload.createServer();
    lrserver.watch([
        __dirname,
        path.join(__dirname,'src')
    ])
    port = 3000;
}
else {
    app.use(express.static(
        path.join(__dirname,'dist')
    )); 
}

app.listen(port, () => console.log(`aXplain ${env} server listening on port ${port}`));

require('./APIs/flickrAPI.js')(app);
require('./APIs/woffuAPI.js')(app);

app.get('*/*', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})    


