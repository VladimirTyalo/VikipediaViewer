import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from 'Title/Title';
import Header from 'Header/Header';
import Form from 'Form/Form';
import OutputWrapper from 'OutputWrapper/OutputWrapper';
import Article from 'Article/Article';
import Articles from 'Articles/Articles.jsx';
import EmptyOutput from '../components/EmptyOutput/EmptyOutput.jsx';

import s from './App.css';
import '../styles/global.css';

const articles = [
    {
        title: 'War and Peace',
        author: 'L.Tolstoy',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2015'
    },
    {
        title: 'Bees might fly',
        author: 'British scientist',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2016'
    },
    {
        title: 'Missles',
        author: 'Putin',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2014'
    },
    {
        title: 'JS jubber',
        author: 'Abramov',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2018'
    }
];

export class App extends Component {
    render() {
        return (
            <div className={s.app}>
                <Header />
                <OutputWrapper articles={articles}/>
            </div>
        );
    }
}

export default App;
