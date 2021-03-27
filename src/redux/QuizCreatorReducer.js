const SET_QUESTIONS_COUNT = "SET_QUESTIONS_COUNT"
const SET_CATEGORY_ID = "SET_CATEGORY_ID"
const SET_DIFFICULTY = "SET_DIFFICULTY"
const SET_CATEGORIES = "SET_CATEGORIES"
const SET_QUIZ_TYPE = "SET_QUIZ_TYPE"

let initialState = {
    categoryId: null,
    questions: 10,
    difficulty: "easy",
    quizType: "",
    categories: []
}

const QuizCreatorReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case SET_QUESTIONS_COUNT:
            return {
                ...state,
                questions: action.value
            }
        case SET_CATEGORY_ID:
            return {
                ...state,
                categoryId: action.value
            }
        case SET_DIFFICULTY:
            return {
                ...state,
                difficulty: action.value
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case SET_QUIZ_TYPE:
            return {
                ...state,
                quizType: action.value
            }
        default:
            return state;
    }
}
export const setQuestions = (count) => {
    return ({
        type: "SET_QUESTIONS_COUNT",
        value: count
    })
}
export const setCategoryId = (id) => {
    return ({
        type: "SET_CATEGORY_ID",
        value: id
    })
}

export const setDifficulty = (difficulty) => {
    return ({
        type: "SET_DIFFICULTY",
        value: difficulty
    })
}

export const setCategories = (categories) => {
    return ({
        type: "SET_CATEGORIES",
        categories
    })
}
export const setQuizType = (type) => {
    return ({
        type: "SET_QUIZ_TYPE",
        value: type
    })
}

export default QuizCreatorReducer;