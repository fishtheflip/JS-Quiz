import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionArea from './components/question-area';
import AnswerArea from './components/answer-area';
import OptionsArea from './components/options-area';
import Results from './components/results'

import './main-con.css'

class App extends Component{
    state = {
        i: 0,
        tarAn: ' ',
        qCount: 0,
        questions : [
            {   
                id: "1",
                question: "Внутрь какого HTML тега помещается JavaScript код?",
                variable1: "<scripting>",
                variable2: "<script>",
                variable3: "<javascript>",
                variable4: "<code>",
                trueAnswer: "variable2",
            },
            {   
                id: "2",
                question: "Язык Javascript чувствительный к регистру?",
                variable1: "Да",
                variable2: "Нет",
                variable3: "Нет правильного ответа",
                variable4: "При добавлении модулей в код может быть как да, так и нет",
                trueAnswer: "variable1",
            },
            {   
                id: "3",
                question: "Какое из этих деклараций устарела?",
                variable1: "let",
                variable2: "const",
                variable3: "var",
                variable4: "Ни один из перечисленых",
                trueAnswer: "variable3",
            },
            {   
                id: "4",
                question: "Как правильно объявлять переменную?",
                variable1: "variable a;",
                variable2: "Var a; ",
                variable3: "var a;",
                variable4: "a var",
                trueAnswer: "variable3",
            },
            {   
                id: "5",
                question: "Как объявить строгий режим в Javascript?",
                variable1: " 'strict use'",
                variable2: " 'use of strict' ",
                variable3: " 'use = strict' ",
                variable4: "'use strict'",
                trueAnswer: "variable4",
            },    {   
                id: "6",
                question: "Что такое DOM?",
                variable1: "DOM – это представление HTML-документа в виде дерева тегов",
                variable2: "DOM – это представление JavaScript-кода в виде дерева тегов",
                variable3: "DOM – это расширение для CSS",
                variable4: "DOM – это фреймворк для javaScript",
                trueAnswer: "variable1",
            },
            {   
                id: "7",
                question: "Что не является фреймворком для Javascript?",
                variable1: "Angular",
                variable2: "Jquery",
                variable3: "Vue",
                variable4: "React",
                trueAnswer: "variable4",
            },
            {   
                id: "8",
                question: "Что делает оператор ** ?",
                variable1: "Возводит в степень",
                variable2: "Умножает сам на себя",
                variable3: "Конкатенирует",
                variable4: "Такого оператора не существует",
                trueAnswer: "variable1",
            },
            {   
                id: "9",
                question: `Правда ли что a == b если: a = [1, 2, 3], b = [1,2,3] ?`,
                variable1: "Да",
                variable2: "Нет",
                variable3: "Выведет ошибку",
                variable4: "В зависимости от браузера",
                trueAnswer: "variable2",
            },
            {   
                id: "10",
                question: "Что возвращает свойство length?",
                variable1: "Не существует данного свойства",
                variable2: "Размер кэш-файла",
                variable3: "Число узлов в DOM дереве",
                variable4: "Число элементов в массиве",
                trueAnswer: "variable4",
            }

        ]
    }
    takeAnswer = (e)=> {
        let followingAnswer = e.target.getAttribute('name');
        this.setState({tarAn: followingAnswer});

        
    }
    takeButton = () =>{
        
        if(this.state.tarAn === ' '){
            console.log('nothing');
        } else {
            if(this.state.tarAn === this.state.questions[this.state.i].trueAnswer){
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
                <QuestionArea qu={this.state.questions[i].question}/>
                <AnswerArea answers={this.state.questions[i] } onAnswer={this.takeAnswer}/>
                <OptionsArea onBtn={this.takeButton} onRetake={this.takeRetake}/>
            </div>
                );
            }
};

ReactDOM.render(<App /> , document.querySelector('#root'));