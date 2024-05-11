const category = require("../Model/CategoryModel")

const createCategory = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(400).json({
                success: false,
                mess: "fields is must required"
            })
        }
        console.log(req.body)
        let data = new category({ name })
        await data.save()
        res.status(200).json({
            success: true,
            mess: "New Category created",
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const getCategory = async (req, res) => {
    try {
        let data = await category.find()
        res.status(200).json({
            success: true,
            mess: "Category Found",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const getSingleCategory = async (req, res) => {
    try {
        let data = await category.findOne({ _id: req.params._id })
        res.status(200).json({
            success: true,
            mess: "Category Found",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        let data = await category.findOne({ _id: req.params._id })
        if (data)
            data.name = req.body.name ?? data.name
        await data.save()
        res.status(200).json({
            success: true,
            mess: "Category Found",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}
const deleteCategory = async (req, res) => {
    try {
        let data = await category.findOne({ _id: req.params._id })
        await data.deleteOne()
        res.status(200).json({
            success: true,
            mess: "Category Found"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

module.exports = {
    createCategory: createCategory,
    getCategory: getCategory,
    getSingleCategory: getSingleCategory,
    deleteCategory: deleteCategory,
    updateCategory:updateCategory
}