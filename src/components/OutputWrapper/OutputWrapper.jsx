import React, {Component} from 'react';
import s from './OutputWrapper.css';

class OutputWrapper extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                Find Wikipedia articles for things you are interested in.
            </div>
        );
    }
}

export default OutputWrapper;
