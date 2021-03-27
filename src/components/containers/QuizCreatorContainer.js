import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCategories, setCategoryId, setDifficulty, setQuestions, setQuizType } from '../../redux/QuizCreatorReducer'
import { setQuizStarted, unsetQuiz } from '../../redux/QuizReducer'
import QuizCreator from '../quizCreator/QuizCreator'

const QuizCreatorContainer = (props) => {
    useEffect(() => {
        props.resetQuiz();
        fetch('https://opentdb.com/api_category.php')
            .then(response => response.json())
            .then(data => {
                props.getCategories(data.trivia_categories)
            })
    }, []);

    return <QuizCreator categoryId={props.categoryId} question={props.question}
        difficulty={props.difficulty} changeQuestionsCount={props.changeQuestionsCount}
        changeCategoryId={props.changeCategoryId} changeDifficulty={props.changeDifficulty}
        categories={props.categories} isQuizStarted={props.isQuizStarted}
        quizType={props.quizType} quizStarted={props.quizStarted}
        changeQuizType={props.getQuizType} quizType={props.quizType} />
}

const mapStateToProps = (state) => {
    return {
        categoryId: state.quizInfo.categoryId,
        question: state.quizInfo.questions,
        difficulty: state.quizInfo.difficulty,
        categories: state.quizInfo.categories,
        quizType: state.quizInfo.quizType,
        isQuizStarted: state.quiz.isQuizStarted,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeQuestionsCount: (count) => { dispatch(setQuestions(count)) },
        changeCategoryId: (id) => { dispatch(setCategoryId(id)) },
        changeDifficulty: (difficulty) => { dispatch(setDifficulty(difficulty)) },
        getCategories: (categories) => { dispatch(setCategories(categories)) },
        getQuizType: (type) => { dispatch(setQuizType(type)) },
        resetQuiz: () => { dispatch(unsetQuiz()) },
        quizStarted: () => { dispatch(setQuizStarted()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreatorContainer);