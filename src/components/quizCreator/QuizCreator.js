import React from 'react'
import {QuizButton} from '../quiz/QuizStyles'
import { QuizForm, Heading, QuizSelect } from './QuizCreatorStyles'

const QuizCreator = ({questionsCount, difficulty, categoryId, setQuestionsCount, 
    setDifficulty, setCategoryId, handleSubmit, categories}) => {
    
    return (
        <QuizForm>
                <Heading>Choose Quiz</Heading>
                <label>Choose questions count</label>
                <QuizSelect onChange={(e) => setQuestionsCount(e.target.value) } value={questionsCount}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                </QuizSelect>
                <label>Choose category</label>
                <QuizSelect onChange={(e) => setCategoryId(e.target.value)} defaultValue={categoryId}>
                    {categories ? 
                         categories.map(category => {
                            return <option key={category.id} value={category.id} >{category.name}</option>
                        })
                    :
                    <option value={"any category"}>any category</option>}
                </QuizSelect>
                <label>Choose difficulty</label>
                <QuizSelect onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                    <option value={"easy"}>easy</option>
                    <option value={"medium"}>medium</option>
                    <option value={"hard"}>hard</option>
                </QuizSelect>
                <QuizButton onClick={handleSubmit}>Start</QuizButton>
            </QuizForm>
    )
}





export default QuizCreator;