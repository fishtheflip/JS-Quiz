import React from 'react';

const Results = ({res, onRetake}) =>{
    return(
        <div className="jumbotron">
            <h1>Ваш результат: {res}0% </h1>
            <hr className="my-4"></hr>
            <button className="btn btn-primary btn-lg" href="#" role="button" onClick={onRetake}>Еще раз</button>
        </div>
    )
}
export default Results;