const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category Name is must required"]
    }
})

const category = mongoose.model("category", categorySchema)
module.exports = category