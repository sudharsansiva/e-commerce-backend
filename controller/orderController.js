const orderModle = require("../models/ordermodel")
const productModel=require("../models/productModal")
//ceate order -/api/v1/order

// reduce()  all array datas is change to single array data 
// acc that method is used to privious value next move the value
exports.CreateOrder = async (req, res, next) => {
    const cartItems = req.body;

    const amount = Number(cartItems.reduce((acc, item) => (acc + (item.products?.price || 0) * item.qty), 0)).toFixed(2);

    const status = "pennding"

    const order = await orderModle.create({ cartItems, amount, status })


    //updating products

    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    });
    res.json({
        success: true,
        order
    })
}