import React from 'react';
import s from './Title.css';

export default class Title extends React.Component {
    static defaultProps = {
        text: 'Wikipedia Viewer'
    }
    static propTypes = {
        text: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <h1 className={s.title}>
                {this.props.text}
                {this.props.children}
            </h1>
        );
    }
}
