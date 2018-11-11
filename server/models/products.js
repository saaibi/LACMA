const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

//moment('05/15/2020 12:00', 'MM/DD/YYYY HH:mm')

const productSchema = new Schema({
    name: { type: String, required: true },
    area: { type: String, default: '' },
    parameter: { type: String, default: '' },
    result: { type: String, default: '' },
    limitMin: { type: String, default: '' },
    limitMax: { type: String, default: '' },
    method: { type: String, default: '' },

}, {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

// productSchema.pre('save', function (next) {
//     let { valueCredit, valuePaid } = this;
//     this.percentagePaid = (valuePaid / valueCredit) * 100;
//     next();
// });

// // this._update.$set.valueCredit
// // this._update
// productSchema.pre('findOneAndUpdate', function (next) {
//     let { valueCredit, valuePaid } = this._update;
//     let valueP = valuePaid ? valuePaid : 0;
//     this._update.percentagePaid = (valueP / valueCredit) * 100;
//     next();
// });

module.exports = mongoose.model('Product', productSchema)