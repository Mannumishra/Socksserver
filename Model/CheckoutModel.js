const mongoose = require("mongoose")

const CheckoutSchema = new  mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User Id Must Required"]
    },
    orderstatus: {
        type: String,
        default:"Order is Placed"
    },
    paymentstatus: {
        type: String,
        default:"Pending"
    },
    paymentmode: {
        type: String,
        default:"COD"
    },
    total: {
        type: Number,
        required:[true,"Total Must Required"]
    },
    rppid: {
        type: String,
        default:""
    },
    products: [
       {
        productid: {
            type: String,
            required: [true, "Product is is must required"]
        },
        productname: {
            type: String,
            required: [true, "Product is is must required"]
        },
        quantity: {
            type: Number,
            required: [true, "Product is is must required"]
        },
        pair: {
            type: String,
            required: [true, "Product is is must required"]
        },
        price: {
            type: Number,
            required: [true, "Product is is must required"]
        },
        numberoffoot: {
            type: String,
            required: [true, "Product is is must required"]
        },
        pic: {
            type: String,
            required: [true, "Product is is must required"]
        }
       }
    ]
},{timestamps:true})
const Checkout =  mongoose.model("Checkout", CheckoutSchema)
module.exports = Checkout