const path = require('path');
const fetch = require('node-fetch');
const express = require('express');

const app = express();
const env = app.get('env').replace(/\s/g, "");

let port = 8080;

app.set('json spaces', 40);

if(env === 'dev') {
    const livereload = require('livereload');

    app.use(express.static(__dirname));
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

app.listen(port, () => console.log('aXplain server listening on port ' + port ));

const flickrUrl = (params) => {
    const flikrParams = {
        api_key: '361410381e0bb1885ee6ad24c0348007',
        format: 'json',
        nojsoncallback: 1,
        ...params
    }
    return (`
        https://www.flickr.com/services/rest/?${Object.keys(flikrParams).map(key => `&${key}=${flikrParams[key]}`).join('')}
    `)
}

app.get('/api/getImages/:searchStr?/:page?', async function(req, res) {
    const params = {
        method: 'flickr.photos.search',
        sort: "date-posted-asc",
        content_type: 7,
        lang: "es-US",
        extras: 'owner_name,url_sq, url_t,url_s, url_q,url_m,url_l',
        text: req.params.searchStr || 'archdaily',
        page: req.params.page || 1    
    }

    const response = await fetch(flickrUrl(params));
    const json = await response.json();

    res.json(json);
})

app.get('/api/getImageData/:imageId?', async function(req, res) {
    const paramsInfo = {
        method: 'flickr.photos.getInfo',
        photo_id: req.params.imageId    
    }
    const paramsSizes = {
        method: 'flickr.photos.getSizes',
        photo_id: req.params.imageId    
    }

    const responseInfo = await fetch(flickrUrl(paramsInfo));
    const jsonInfo = await responseInfo.json();

    const responseSizes = await fetch(flickrUrl(paramsSizes));
    const jsonSizes = await responseSizes.json();
    
    const response = {...jsonInfo,...jsonSizes}
    res.json(response);
})

app.get('/images/:imageId', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})    


