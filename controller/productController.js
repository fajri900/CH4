const { product } = require("../models/index");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await product.create({
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
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findProductsById = async (req, res) => {
  try {
    const Products = await product.findOne({
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
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findProducts = async (req, res) => {
  try {
    const Products = await product.findAll();

    res.status(200).json({
      status: "success",
      data: {
        Products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const product = await product.update(
      {
        name,
        stock,
        price,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    req.status(400).json({
      status: "failed",
      mesagge: err.mesagge,
    });
  }
};

const deleteProductsById = async (req, res) => {
  try {
    const Products = await product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      message: "delete sukses",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  findProductsById,
  findProducts,
  updateProduct,
  deleteProductsById,
};
