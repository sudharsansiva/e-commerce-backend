const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    name: String,
    price: String,
    descriptoin: String,
    rating: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createsAt: String,

})

const productModle = mongoose.model("product", productschema)

module.exports = productModle