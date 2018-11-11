const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const ClientSchema = new Schema({
    company: { type: String, required: true },
    nit: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('Client', ClientSchema);
