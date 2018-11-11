const express = require('express');
const router = express.Router();


const productsController = require('../controllers/products.controller');

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getByIdProduct);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;