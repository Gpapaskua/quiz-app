import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setCorrectAnswer, setQuizStarted, setQuiz, setWrongAnswers } from '../../redux/QuizReducer';
import Quiz from '../quiz/Quiz';

const QuizContainer = (props) => {
    useEffect(() => {
        let categoryId = props.categoryId;
        if (categoryId === null) {
            categoryId = Math.floor(Math.random() * 20) + 10;
        }
        fetch(`https://opentdb.com/api.php?amount=${props.questions}&category=${categoryId}&difficulty=${props.difficulty}&type=${props.type}`)
            .then(response => response.json())
            .then(quiz => {
                if (props.isQuizStarted)
                    if (quiz.response_code === 0) {
                        props.getQuiz(quiz.results);
                        props.getQuizStarted()
                    }
            })
    }, []);
    let checkAnswer = (clickedAnswer, correctAnswer) => {
        clickedAnswer === correctAnswer ? props.getCorrectAnswers() : props.getWrongAnswers();
    }
    if (!props.isQuizStarted) {
        return <Redirect to={"/"} />
    }
    return (

        <Quiz quiz={props.quiz} correctAnswers={props.correctAnswers}
            incorrectAnswers={props.incorrectAnswers} questions={props.questions}
            checkAnswer={checkAnswer} />
    )
}
const mapStateToProps = (state) => {
    return ({
        categoryId: state.quizInfo.categoryId,
        difficulty: state.quizInfo.difficulty,
        type: state.quizInfo.quizType,
        questions: state.quizInfo.questions,
        quiz: state.quiz.quiz,
        correctAnswers: state.quiz.correctAnswers,
        incorrectAnswers: state.quiz.wrongAnswers,
        isQuizStarted: state.quiz.isQuizStarted
    })

}
const mapDispatchToProps = (dispatch) => {
    return {
        getQuiz: (quiz) => {
            dispatch(setQuiz(quiz))
        },
        getCorrectAnswers: () => {
            dispatch(setCorrectAnswer());
        },
        getWrongAnswers: () => {
            dispatch(setWrongAnswers());
        },
        getQuizStarted: () => {
            dispatch(setQuizStarted());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);