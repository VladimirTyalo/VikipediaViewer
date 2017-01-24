import React, { Component } from 'react';
import s from './Article.css';

class Article extends Component {
    render() {
        const {title, context, link} = this.props.article;

        return (
            <article className={s.article}>
                <a href={link} className={s.link} target='_blank'>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.text}>{context}</p>
                </a>
            </article>
        );
    }
}

export default Article;
