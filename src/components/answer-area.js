import React from 'react';
import './answer-area.css'

const AnswerArea = ({answers, onAnswer}) =>{

    return(
      <div className="answer">
      <button className="btn btn-primary btn-lg btn-block" onClick={onAnswer} name="variable1">{answers.variable1}</button>
      <button className="btn btn-primary btn-lg btn-block" onClick={onAnswer} name="variable2">{answers.variable2}</button>
      <button className="btn btn-primary btn-lg btn-block" onClick={onAnswer} name="variable3">{answers.variable3}</button>
      <button className="btn btn-primary btn-lg btn-block" onClick={onAnswer} name="variable4">{answers.variable4}</button>
      </div>
    );
  
  };

  export default AnswerArea;
