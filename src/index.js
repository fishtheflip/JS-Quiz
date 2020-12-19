import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import QuestionArea from './components/question-area';
import AnswerArea from './components/answer-area';
import OptionsArea from './components/options-area';
import Results from './components/results'
import data from './data';
import reducer from './reducer';

import './main-con.css'


const store = createStore(reducer);

const App = () =>{


    const takeAnswer = (e)=> {
        let payload = e.target.getAttribute('name');
        store.dispatch({type: 'TARGET', payload});
        
    }

    const takeButton = () =>{

        let {tarAn, i} = store.getState(); 
        if(tarAn === ' '){
            document.querySelector('#root').classList.add("dn");
            setTimeout(()=>{
                document.querySelector('#root').classList.remove("dn");
            }, 500);
        } else {
            if(tarAn === data[i].trueAnswer){
                console.log('TOOOK!');
                store.dispatch({type: 'QPLUS'});
                store.dispatch({type: 'WASH'});
                store.dispatch({type: 'NEXTBTN'});
            } else {
                store.dispatch({type: 'WASH'});
                store.dispatch({type: 'NEXTBTN'});
                
            }
        }

    }

    const takeRetake = () =>{
        store.dispatch({type: 'WASHALL'});
        console.log(store.getState());
    }

   

    let {i , qCount} = store.getState();

    if(i === 20){
            return(
                <Results res={qCount} onRetake={takeRetake}/>    
        );
    }
    return(
        <div className='main-con'>
            <QuestionArea qu={data[i].question}/>
            <AnswerArea answers={data[i] } onAnswer={takeAnswer}/>
            <OptionsArea onBtn={takeButton} onRetake={takeRetake}/>
        </div>
            );
            
};

const update = () =>{
    ReactDOM.render(<App /> , document.querySelector('#root'));
}

update();
store.subscribe(update);






