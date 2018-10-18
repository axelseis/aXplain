const path = require('path');
const fetch = require('node-fetch');
const express = require('express');

const app = express();
const env = app.get('env').replace(/\s/g, "");

app.set('json spaces', 40);

if(env === 'dev') {
    const livereload = require('livereload');

    app.use(express.static(__dirname));

    var lrserver = livereload.createServer();
    lrserver.watch([
        __dirname,
        path.join(__dirname,'src')
    ])
}
else {
    app.use(express.static(
        path.join(__dirname,'dist')
    ));    
}

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
    const params = {
        method: 'flickr.photos.getInfo',
        photo_id: req.params.imageId    
    }

    const response = await fetch(flickrUrl(params));
    const json = await response.json();

    res.json(json);
})

app.get('/images/:imageId', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('*', function(req,res){
    res.send('what???', 404);
})    

app.listen(3000, () => console.log('aXplain server listening on port 3000!'));

