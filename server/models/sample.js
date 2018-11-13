const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const SampleSchema = new Schema({
    code: { type: String, required: true },
    version: { type: String, required: true },
    reference: { type: String, required: true },
    analyst: { type: String, required: true },
    coordinator: { type: String, required: true },
    typeSample: { type: String, required: true },
    responsibleSample: { type: String, required: true },
    quantity: { type: String, required: true },
    lote: { type: String, required: true },
    typeContainer: { type: String, required: true },
    color: { type: String, required: true },
    smell: { type: String, required: true },
    appearance: { type: String, required: true },
    characteristicsOrganoleptic: { type: String, required: true },
    temperature: { type: String, required: true },
    manufacturingDate: { type: Date, required: true },
    expirationDate: { type: Date, required: true },
    receiptDate: { type: Date, required: true },
    startDateAnalysis: { type: Date, required: true },
    endDateAnalysis: { type: Date, required: true },
    reportDate: { type: Date, required: true },
    agreedDeliveryDate: { type: Date, required: true },
    deliveryDate: { type: Date, required: true },
    takeSampleDate: { type: Date, required: true },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        default: []
    }]
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('Sample', SampleSchema);
