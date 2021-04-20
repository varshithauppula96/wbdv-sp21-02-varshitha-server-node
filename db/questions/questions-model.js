const questionsSchema =require("./questions_schema")
const mongoose =require("mongoose")
const questionsModel=mongoose.model("QuestionModel",questionsSchema)

module.exports = questionsModel