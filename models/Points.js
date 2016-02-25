var mongoose = require('../node_modules/mongoose');
var Schema = mongoose.Schema;

var MesssurementPoints = new Schema({
    id: Number,
    name: String,
    type: String,
    location: { latitude: Number,
                longitude: Number
    },
    metrics:[{  id:String,
                name: String},
             {  id: String,
                name: String}

    ],
    classes: [String,
              String,
              String ]
});


var Points = mongoose.model('Points', MesssurementPoints);
module.exports = Points;
