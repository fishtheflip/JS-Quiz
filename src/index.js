import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionArea from './components/question-area';
import AnswerArea from './components/answer-area';
import OptionsArea from './components/options-area';
import Results from './components/results'
import data from './data';

import './main-con.css'

class App extends Component{
    state = {
        i: 0,
        tarAn: ' ',
        qCount: 0
    }
    takeAnswer = (e)=> {
        let followingAnswer = e.target.getAttribute('name');
        this.setState({tarAn: followingAnswer});

        
    }
    takeButton = () =>{
        
        if(this.state.tarAn === ' '){
            console.log('nothing');
        } else {
            if(this.state.tarAn === data[this.state.i].trueAnswer){
                this.setState({qCount: this.state.qCount + 1});
                this.setState({i: this.state.i + 1});
                this.setState({tarAn: ' '});
                console.log(this.state);
            } else {
                this.setState({i: this.state.i + 1});
                this.setState({tarAn: ' '});
                console.log(this.state);
            }
            
        }
    }

    takeRetake = () =>{
        this.setState({
            i: 0,
            tarAn: ' ',
            qCount: 0
        });
    }

    render(){
        let {i} = this.state; 
    
        if(this.state.i === 9){
            return(
                <Results res={this.state.qCount} onRetake={this.takeRetake}/>    
            );
        }
        
        return(
            
            <div className='main-con'>
                <QuestionArea qu={data[i].question}/>
                <AnswerArea answers={data[i] } onAnswer={this.takeAnswer}/>
                <OptionsArea onBtn={this.takeButton} onRetake={this.takeRetake}/>
            </div>
                );
            }
};

ReactDOM.render(<App /> , document.querySelector('#root'));