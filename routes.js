module.exports = function(app){
    var temp = require('./controllers/controller');

    app.get('/city/:id', temp.findById);

}