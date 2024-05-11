const productRouter = require("express").Router()
const { createProduct, getAllProducts, deleteProduct, getProductById, updateProduct } = require("../Controllar/ProductContollar")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/Product')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

productRouter.post("/product", upload.fields([
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 }
]), createProduct)
productRouter.get("/product", getAllProducts)
productRouter.get("/product/:_id", getProductById)
productRouter.delete("/product/:_id", deleteProduct)
productRouter.put("/product/:_id", upload.fields([
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 }
]), updateProduct)

module.exports = productRouter