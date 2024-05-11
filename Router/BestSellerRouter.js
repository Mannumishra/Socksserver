const bestsellerRouter = require("express").Router()
const multer = require("multer")
const { createRecord, getRecord, updateRecord, deleteRecord, getSingleRecord } = require("../Controllar/BestSellerControllar")



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/BestSeller')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

bestsellerRouter.post("/bestseller", upload.single("image"), createRecord)
bestsellerRouter.get("/bestseller", getRecord)
bestsellerRouter.get("/bestseller/:_id", getSingleRecord)
bestsellerRouter.put("/bestseller/:_id", upload.single("image"), updateRecord)
bestsellerRouter.delete("/bestseller/:_id",deleteRecord)

module.exports = bestsellerRouter

