import React from 'react';
import './question-area.css'

const QuestionArea = ({qu}) => {
    return (
      <div className='quest'>
         <label className="lab"> {qu}</label>
      </div>
    );
  };
  
export default QuestionArea;