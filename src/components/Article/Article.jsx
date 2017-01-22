import React, {Component} from 'react';
import s from './Article.css';

class Article extends Component {
    render() {
        return (
            <article className={s.article}>
                <h3>Title</h3>
                <p>Content</p>
                <cite>author</cite>
            </article>
        );
    }
}

export default Article;
