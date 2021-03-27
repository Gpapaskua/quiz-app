import { combineReducers, createStore } from 'redux'
import QuizCreatorReducer from './QuizCreatorReducer';
import QuizReducer from './QuizReducer';

let rootReducer = combineReducers({
    quizInfo: QuizCreatorReducer,
    quiz: QuizReducer
});

let store = createStore(rootReducer);

export default store;