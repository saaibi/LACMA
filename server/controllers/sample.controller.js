const Sample = require("../models/sample");
const dataModels = require("../utils/dataModels");
const fs = require("fs");

const sampleController = {};

sampleController.getAllSamples = async (req, res) => {
    const samples = await Sample.find();
    res.json(samples);
};

sampleController.getByIdSample = async (req, res) => {
    const sample = await Sample.findById(req.params.id);
    res.json(sample);
};

sampleController.getByIdSampleProducts = async (req, res) => {
    const sample = await Sample.findById(req.params.id).populate('products').exec();
    res.json(sample);
};

sampleController.createSample = async (req, res) => {
    const newSample = dataModels(req.body);
    await newSample.save((err, user) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Sample Saved", user });
    });
};

sampleController.updateSample = async (req, res) => {
};

sampleController.deleteSample = async (req, res) => {
    try {
        await Sample.findByIdAndRemove(req.params.id, (err, sample) => {
            if (err) return res.json({ error: err });
            res.json({ status: "Sample Removed" });
        });
    } catch (error) {
        const message = error.message || error;
        res.json({ error: message });
    }
};

module.exports = sampleController;