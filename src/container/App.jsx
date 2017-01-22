import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from 'Title/Title';
import Header from 'Header/Header';
import Form from 'Form/Form';
import OutputWrapper from 'OutputWrapper/OutputWrapper';
import Article from 'Article/Article';
import Articles from 'Articles/Articles.jsx';

import s from './App.css';
import '../styles/global.css';

export class App extends Component {
    render() {
        return (
            <div className={s.app}>
                <Header>
                    <Title></Title>
                    <Form />
                </Header>
                <OutputWrapper />
                <Articles articles={[1,2,3,5,6,10]} />
            </div>
        );
    }
}

export default App;
