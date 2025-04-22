const productModle = require("../models/productModal")

exports.getproducts = async (req, res, next) => {
    // $regex mongo single product adukka
    // $option upercasse lower case pakka
    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const products = await productModle.find(query )

    res.json({
        success: true,
        products
    })
}


exports.getSingleproducts = async (req, res, next) => {
    try {
        console.log(req.params.id, 'ID')
        const product = await productModle.findById(req.params.id)
        res.json({
            success: true,
            product
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "that is not object Id"
        })

    }


}