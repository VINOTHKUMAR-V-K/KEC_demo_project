let productModel = require("../Model/productSchema");

exports.postProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    return res.status(201).json({
      mse: "Data added...",
      product: product,
    });
  } catch (err) {
    return res.status(500).json({
      mse: "Something went wrong",
      Err: err,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await productModel.find();
    return res.status(201).json({
      mse: "Data fetched...",
      product: product,
    });
  } catch (err) {
    return res.status(500).json({
      mse: "Something went wrong",
      Err: err,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        mse: "Product not found...",
      });
    }
    return res.status(201).json({
      mse: "Data fetched...",
      product: product,
    });
  } catch (err) {
    return res.status(500).json({
      mse: "Something went wrong",
      Err: err,
    });
  }
};
exports.getProductByIdAndUpdate = async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!product) {
      return res.status(400).json({
        mse: "Product not found...",
      });
    }
    return res.status(201).json({
      mse: "Data updated successfully...",
      product: product,
    });
  } catch (err) {
    return res.status(500).json({
      mse: "Something went wrong",
      Err: err,
    });
  }
};
exports.getProductByIdAndDelete = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(400).json({
        mse: "Product not found...",
      });
    }
    return res.status(201).json({
      mse: "Data deleted successfully...",
    });
  } catch (err) {
    return res.status(500).json({
      mse: "Something went wrong",
      Err: err,
    });
  }
};
