import React, {Component} from 'react';
import s from './Article.css';

class Article extends Component {
    render() {
        const {title, author, context, date} = this.props.article;
        console.log(this.props.title);
        return (
            <article className={s.article}>
                <h3>{title}</h3>
                <p>{context}</p>
                <cite>{author}</cite>
                <span>{date}</span>
            </article>
        );
    }
}

export default Article;
