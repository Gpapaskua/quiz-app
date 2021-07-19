import { useCategories } from '../contexts/useCategories'
import styled from 'styled-components'
import { useQuizData } from '../contexts/useQuizData'
import { useQuizCreator } from '../contexts/QuizCreatorContext'
import {  useHistory } from 'react-router-dom'


const QuizCreatorContainer = (props) => {
    const categories = useCategories()
    const {questionsCount, difficulty, categoryId, setQuestionsCount, setDifficulty, setCategoryId} = useQuizCreator()
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/quiz')
        
    }
            return(
                <CreateQuizPage>
            <QuizForm onSubmit={handleSubmit}>
                <Heading>Choose Quiz</Heading>
                <label>Choose questions count</label>
                <NumberInput type="number" min={10} max={30}
                    value={questionsCount} onChange={(e) => setQuestionsCount(e.target.value)} />
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
                <StartButton onClick={handleSubmit}>Start</StartButton>
            </QuizForm>
        </CreateQuizPage >
            )
}

const CreateQuizPage = styled.div`
   width: 50%;
   margin: 0 auto;
   height: 100vh;
   @media (max-width: 768px) {
    width: 90%;
  }
`
const QuizForm = styled.form`
    width: 90%;
    height: 90vh;
    margin: 0 auto;
    background: #00dbde;
    border-radius: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
   

`

const NumberInput = styled.input`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    width: 50%;
    text-align: center;
    padding: 1rem 0;
    border: none;
    border-radius: 0.6rem;
    outline: none;
    font-size: 1rem;
`
const QuizSelect = styled.select`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    padding: 1rem 0.5rem;
    border: none;
    margin: 0;
    border-radius: 0.6rem;
    outline: none;
    text-transform: capitalize;
    font-size: 1rem;
    &:hover{
        cursor: pointer;
    }
`
const StartButton = styled.button`
    padding: 0.6rem;
    width: 30%;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    cursor: pointer;
    background: #FFD194;
    color: #181818;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding: 0.8rem 0;
    &:hover{
        background: #FFFB7D;
        color: #2c3e50;
        
    }
`
const Heading = styled.h2`
    text-align: center;
    letter-spacing: 0.2rem;
`

export default QuizCreatorContainer