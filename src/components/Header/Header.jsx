import React from 'react';
import Title from '../Title/Title.jsx';
import Form from '../Form/Form.jsx';

export default class Header extends React.Component {

    render () {
        return (
            <header>
                <Title />
                <Form />
                {this.props.children}
            </header>
        );
    }
}
