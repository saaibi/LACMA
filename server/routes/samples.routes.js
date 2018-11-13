const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const upload = multer({ storage: storage });


const sampleController = require('../controllers/sample.controller');

router.get('/', sampleController.getAllSamples);
router.get('/:id', sampleController.getByIdSample);
router.get('/:id/products', sampleController.getByIdSampleProducts);
router.post('/', sampleController.createSample);
router.put('/:id', sampleController.updateSample);
router.delete('/:id', sampleController.deleteSample);

module.exports = router;