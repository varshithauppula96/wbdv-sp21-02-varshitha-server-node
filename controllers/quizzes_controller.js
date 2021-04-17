const quizzesService = require("../services/quizes/quizzes-service")
module.exports =(app) =>{

    const findAllQuizzes =(req,res) =>{
        // res.send(quizzesService.findAllQuizes())
        quizzesService.findAllQuizes().then((quizzes)=>{
            res.send(quizzes)
        })
    }
    const findQuizById = (req, res) => {
        const qid = req.params['quizId']
        // const quiz = quizzesService.findQuizById(qid)
        quizzesService.findQuizById(qid)
            .then((quiz) => {
                res.send(quiz)
            })
    }
    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)



}