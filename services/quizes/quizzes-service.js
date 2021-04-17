const quizzes = require("./quizzes.json")

const quizzesModel =require("../../db/quizzes/quizzes-model")
const createQuiz =()=>{

}
const findAllQuizes =()=>{
return quizzesModel.find()
}

const findQuizById = (quizId) => {
    return quizzesModel
        .findById(quizId)
        .populate("quizzes")
        .exec()
    // return quizzesModel.find({_id: quizId})
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })
}

const updateQuiz = () => {

}

const deleteQuiz = () => {

}

module.exports = {
    createQuiz, findQuizById, findAllQuizes, updateQuiz,deleteQuiz
}