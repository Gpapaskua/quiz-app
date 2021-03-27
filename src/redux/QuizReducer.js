const SET_QUIZ = "SET_QUIZ"
const SET_CORRECT_ANSWERS = "SET_CORRECT_ANSWERS"
const SET_WRONG_ANSWERS = "SET_WRONG_ANSWERS"
const SET_QUIZ_STARTED = "SET_QUIZ_STARTED"
const UNSET_QUIZ = "UNSET_QUIZ"

let initialState = {
    quiz: [],
    correctAnswers: 0,
    wrongAnswers: 0,
    isQuizStarted: false
}

const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUIZ:
            return {
                ...state,
                quiz: action.quiz,
                isQuizStarted: true
            }
        case SET_CORRECT_ANSWERS:
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1
            }
        case SET_WRONG_ANSWERS:
            return {
                ...state,
                wrongAnswers: state.wrongAnswers + 1
            }
        case SET_QUIZ_STARTED:
            console.log("setting")
            return {
                ...state,
                isQuizStarted: true
            }
        case UNSET_QUIZ:

            return {
                ...state,
                quiz: [],
                correctAnswers: 0,
                wrongAnswers: 0,
                isQuizStarted: false
            };


        default:
            return state;
    }
}

export const setQuiz = (quiz) => {
    return ({
        type: "SET_QUIZ",
        quiz
    })
}

export const setCorrectAnswer = () => {
    return ({
        type: "SET_CORRECT_ANSWERS"
    })
}

export const setWrongAnswers = () => {
    return ({
        type: "SET_WRONG_ANSWERS"
    })
}

export const setQuizStarted = () => {
    return ({
        type: "SET_QUIZ_STARTED"
    })
}

export const unsetQuiz = () => {
    return ({
        type: "UNSET_QUIZ"
    })
}

export default QuizReducer;