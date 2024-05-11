const { createCategory, getCategory, getSingleCategory, deleteCategory, updateCategory } = require("../Controllar/CategoryControllar")
const { verifyAdmin } = require("../Utils/Verifytoken")

const categoryRouter = require("express").Router()

categoryRouter.post("/category",verifyAdmin , createCategory)
categoryRouter.get("/category", getCategory)
categoryRouter.get("/category/:_id" , getSingleCategory)
categoryRouter.delete("/category/:_id",verifyAdmin , deleteCategory)
categoryRouter.put("/category/:_id" ,verifyAdmin, updateCategory)

module.exports = categoryRouter