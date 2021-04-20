
let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const mongoose = require('mongoose');
const remoteUri = `mongodb+srv://whiteboard_user:098765@cluster0.g5thl.mongodb.net/Course_whiteboard?retryWrites=true&w=majority`

try {
    mongoose.connect(remoteUri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));
} catch (err) {
    console.log('failed to connect to db')
}
// mongoose.connect('mongodb://localhost:27017/whiteboard-01', {useNewUrlParser: true});


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// const demos =require('./controllers/demos-controller')
// demos(app)

const quizzesController = require("./controllers/quizzes_controller")
const questionController = require("./controllers/question-controller")
require('./controllers/quiz-attempts-controller')(app);
quizzesController(app)
questionController(app)
app.listen(process.env.PORT || 4000);