const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    gia: {
        type: Number,
        required: true
    },
    hang: {
        type: String,
        required: true
    }
});

const CarModel = mongoose.model('Car', CarSchema);

module.exports = CarModel;