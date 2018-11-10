const fetch = require('node-fetch');

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

module.exports = function(app){
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

}    
