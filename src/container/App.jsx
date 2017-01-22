import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from 'Title/Title';
import Header from 'Header/Header';
import Form from 'Form/Form';
import OutputWrapper from 'OutputWrapper/OutputWrapper';

import s from './App.css';
import '../styles/global.css';

export class App extends Component {
    render() {
        return (
            <div className={s.app}>
               <Header>
                    <Title></Title>
                    <Form/>
               </Header>
               <OutputWrapper />
            </div>
        );
    }
}

export default App;
