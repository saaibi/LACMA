const Product = require("../models/products");

const productController = {};

productController.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

productController.getByIdProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

productController.createProduct = async (req, res) => {
    const { name, area, parameter, result, limitMin, limitMax, method } = req.body;
    const product = new Product({
        name, area, parameter, result, limitMin, limitMax, method
    });

    await product.save((err, product) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Product Saved", product });
    });

};

// query = { _id: req.params.id };
// console.log(moment(credit.startDate).format("DD/MM/YYYY HH:mm"))
productController.updateProduct = async (req, res) => {
    const { } = req.body;
    const productUpdate = {
    };
    const options = { new: true, runValidators: true };

    await Product.findByIdAndUpdate(req.params.id, productUpdate, options, (err, credit) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Product Updated", credit });
    });
};

productController.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id, (err, product) => {
            if (err) return res.json({ error: err });
            res.json({ status: "Product Removed" });
        });
    } catch (error) {
        const message = error.message || error;
        res.json({ error: message });
    }
};

module.exports = productController;