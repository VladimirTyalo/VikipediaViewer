import React, { Component } from 'react';
import s from './Form.css';

class Form extends Component {
    onFocus() {
        this.refs.input.placeholder = '';
    }
    onBlur() {
        this.refs.input.placeholder = 'Search...';
    }
    render() {
        return (
            <form action='#' method='GET' className={s.form}>
                <div>
                    <input className={s.input}
                        ref='input'
                        type='text'
                        id='search'
                        autoComplete='off'
                        placeholder='Search...'
                        onFocus={this.onFocus.bind(this)}
                        onBlur={this.onBlur.bind(this)} />
                </div>
            </form>
        );
    }
}

export default Form;
