import React from 'react';
import './options-area.css'



const OptionsArea = ({onBtn, onRetake}) => {
    return(
      <div className="options">
        <button className="btn btn-outline-danger cnc-btn" onClick={onRetake}>Рестарт</button>
        <button className="btn btn-outline-success" onClick={onBtn}>Следующий вопрос</button>
      </div>
    );
  };

  export default OptionsArea;