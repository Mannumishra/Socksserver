const banareRouter = require("express").Router()
const multer = require("multer")
const { createRecord, getRecord, updateRecord, deleteRecord, getSingleRecord } = require("../Controllar/BanareControllar")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/Banare')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

banareRouter.post("/banare", upload.single("image"), createRecord)
banareRouter.get("/banare", getRecord)
banareRouter.get("/banare/:_id", getSingleRecord)
banareRouter.put("/banare/:_id", upload.single("image"), updateRecord)
banareRouter.delete("/banare/:_id",deleteRecord)

module.exports = banareRouter

