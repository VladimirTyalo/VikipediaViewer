import React, { Component } from 'react';
import uuid from 'uuid';

import s from './OutputWrapper.css';
import Article from '../Article/Article';

class OutputWrapper extends Component {


    render() {
        const articles = this.props.articles || [];
        const list = articles.map((art) => {
            return (
                <li key={uuid()}>
                    <Article article={art} />
                </li>
            );
        });

        const empty = (<div>Find Wikipedia articles for things you are interested in.</div>);
        const isEmpty = list.length === 0;

        return (
            <ul className={s.wrapper}>
                {isEmpty ? empty : list}
            </ul>
        );
    }
}

export default OutputWrapper;
