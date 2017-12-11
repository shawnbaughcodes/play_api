let mongoose = require('mongoose'),
    fs = require('fs')
    path = require('path')

console.log('connecting to database...');

mongoose.connect('mongodb://localhost/play_api');

let models_path = path.join(__dirname, './../models');
let controllers_path = path.join(__dirname, './../controllers');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('js') >= 0) {
        console.log('loading ' + file + '...');
        require(models_path + '/' + file);
    }
})
