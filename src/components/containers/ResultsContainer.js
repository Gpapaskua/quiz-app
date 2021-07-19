import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Results from '../results/Results';

const ResultsContainer = (props) => {
    if (!props.isQuizStarted) {
        return <Redirect to={"/"} />
    }

    return (
        <Results totalQuestions={props.totalQuestions} correctAnswers={props.correctAnswers}
            wrongAnswers={props.wrongAnswers} clearQuiz={props.clearQuiz} />
    )
}
const mapStateToProps = (state) => {
    return {
        correctAnswers: state.quiz.correctAnswers,
        wrongAnswers: state.quiz.wrongAnswers,
        totalQuestions: state.quizInfo.questions,
        isQuizStarted: state.quiz.isQuizStarted
    }
}
const mapDispachToProps = (dispatch) => {
    return {
        clearQuiz: () => { dispatch(unsetQuiz()) }
    }
}


export default connect(mapStateToProps, mapDispachToProps)(ResultsContainer);