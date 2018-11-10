const usersData = require('./usersData.json')

module.exports = function(app){
    app.post('/api/getUsers', function(req, res) {
        try {
            const filter = req.body.filter || []
            const json = usersData;

            const filtered = json.map(element => {
                return filter.reduce((newElement,key) => {
                    const newKey = !(!element[key] && element[key] !== 0) ? {[key]:  element[key]} : {}
                    return {...newElement,...newKey}
                },{})
            })
            
            res.json(filtered);
        } 
        catch (error) {
            console.log('error', error)
        }
    })
}
