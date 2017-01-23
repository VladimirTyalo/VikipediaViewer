import React, { Component } from 'react';
import Article from '../Article/Article.jsx';
import s from './Articles.css';

class Articles extends Component {
    render() {

        return (
            <div className={s.articles}>
                {this.props.articles.map((art) => {
                    return (
                        <Article article={art} />
                    );
                })}
            </div>
        );
    }
}

export default Articles;
