let productModel = require("../Model/productSchema");

exports.postProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    return res.status(201).json({ 
        mse: "Data added...", 
        product: product });
  } catch (err) {
    return res.status(500).json({ 
        mse: "Something went wrong", 
        Err: err });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await productModel.find();
    return res.status(201).json({ 
        mse: "Data fetched...", 
        product: product });
  } catch (err) {
    return res.status(500).json({ 
        mse: "Something went wrong", 
        Err: err });
  }
};
