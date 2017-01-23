import React, { Component } from 'react';
import s from './OutputWrapper.css';
import Article from '../Article/Article';

class OutputWrapper extends Component {

    list = this.props.articles.map((art) => {
        return (
            <li key={art.title}>
                <Article article={art}/>
            </li>
        );
    });
    render() {

        return (
            <ul className={s.wrapper}>
                Find Wikipedia articles for things you are interested in.
                 {this.list || <div></div>}
            </ul>
        );
    }
}

export default OutputWrapper;
