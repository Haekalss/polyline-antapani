const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  geojson: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('Route', routeSchema);