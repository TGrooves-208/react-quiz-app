import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactQuizBox from "./components/ReactQuizBox";
import Result from "./components/Result";

import "./App.css";
// next we will import the data source module
import data from "./data";

class ReactQuiz extends Component {
  // We need to instantiate the state for the questions
  // State should always be located at the nearest parent
  // Here the question bank is set to an array
  // The score is set to 0 && the responses are also set to 0
  state = {
    reactQuestionBank: [],
    score: 0,
    responses: 0
  };

  // We then create a methos to obtain the question set
  getQuestions = () => {
    data().then(question => {
      this.setState({
        reactQuestionBank: question
      });
    });
  };

  // We need to write a method for the computeAnswer process
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };

  // We set up the reviewAgain function to accomplish two things
  // Invoke the getQuestions() -> to fetch a new set of questions
  // Then we will reset our score for the new study review -> setState()
  reviewAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };

  // We will then use the ComponentDidMount lifecycle method
  // This is bringing in the question objects from our file
  // We then populated a state variable called {question} with this data
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">React Quiz</div>
        {/* Next we will check the state of the questions if there is data to render*/}
        {/* Then after the check is done we will map throught the data */}
        {this.state.reactQuestionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.reactQuestionBank.map(
            ({ question, answers, correct, questionId }) => (
              // Here we will be rendering instances of the ReactQuizBox component dynamically
              // These will be used to pass down props
              // Make sure you have a key set or the react tools will still compile
              // yet tell it is expecting a unique key identifier
              <ReactQuizBox
                key={questionId}
                question={question}
                options={answers}
                selected={answer => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} reviewAgain={this.reviewAgain} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<ReactQuiz />, document.getElementById("root"));
