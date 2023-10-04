const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
    });

    res.status(200).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    req.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findProductsById = async (req, res) => {
  try {
    const Products = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        Products,
      },
    });
  } catch (err) {
    req.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findProducts = async (req, res) => {
  try {
    const Products = await Product.findAll();

    res.status(200).json({
      status: "success",
      data: {
        Products,
      },
    });
  } catch (err) {
    req.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateProductsById = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const Products = await Product.update({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        Products,
      },
    });
  } catch (err) {
    req.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteProductsById = async (req, res) => {
  try {
    const Products = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      message: "delete sukses",
    });
  } catch (err) {
    req.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  findProductsById,
  findProducts,
  updateProductsById,
  deleteProductsById,
};
