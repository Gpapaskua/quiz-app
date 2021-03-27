import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuizContainer from './components/containers/QuizContainer';
import QuizCreatorContainer from './components/containers/QuizCreatorContainer';
import ResultsContainer from './components/containers/ResultsContainer';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact render={() => <QuizCreatorContainer />} path={"/"} />
        <Route render={() => <QuizContainer />} path={"/quiz"} />
        <Route render={() => <ResultsContainer />} path={"/results"} />
      </Router>
    </div>
  );
}

export default App;
