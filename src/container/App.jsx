import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Title from 'Title/Title';
import Header from 'Header/Header';
import Form from 'Form/Form';
import OutputWrapper from 'OutputWrapper/OutputWrapper';
import Article from 'Article/Article';
import Articles from 'Articles/Articles.jsx';
import EmptyOutput from '../components/EmptyOutput/EmptyOutput.jsx';

import s from './App.css';
import '../styles/global.css';

const arts = [
    {
        title: 'War and Peace',
        author: 'L.Tolstoy',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2015'
    },
    {
        title: 'Bees might fly',
        author: 'British scientist',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2016'
    },
    {
        title: 'Missles',
        author: 'Putin',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2014'
    },
    {
        title: 'JS jubber',
        author: 'Abramov',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloremque.',
        date: '12.12.2018'
    }
];


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: arts,
            isfetching: false
        };
    }

    static propTypes = {
        articles: React.PropTypes.array
    }

    componentDidMount() {
        this._makeRequest('moto', 10);
    }

    componentWillUnmount() {

    }

    _makeRequest(word, limit) {
        let data;
        const self = this;
        this.setState({ isFetching: true });
        if (word == '') {
            data = {
                action: "query",
                format: "json",
                list: 'random',
                rnlimit: 1
            };
        } else {
            data = {
                action: "opensearch",
                format: "json",
                search: word,
                limit: limit
            };
        }
        return Promise.resolve($.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: data
        })).then((response) => {
            let articles;
            if (word == '') {
                const id = response.query.random[0].id;
                data = {
                    action: 'query',
                    format: "json",
                    prop: 'info',
                    pageids: id,
                    inprop: 'url'
                };
                return Promise.resolve($.ajax({
                    url: "https://en.wikipedia.org/w/api.php",
                    dataType: "jsonp",
                    data: data
                })).then((result) => {
                    const info = result.query.pages[id];
                    return [{
                        title: info.title,
                        link: info.canonicalurl
                    }];
                });
            }
            return Array.from(response[1]).map((word, index) => {
                return {
                    title: word,
                    context: response[2][index],
                    link: response[3][index]
                };
            });
        }).then((articles) => {
            self.setState({ articles: articles, isFetching: false });
        }).catch((err) => { console.log(err); });
    }

    fetchData(word) {
        this._makeRequest(word, 10);
    }

    clearOutput() {
        this.setState({ articles: [] });
    }


    render() {
        return (
            <div className={s.app}>
                <Header closed={this.state.articles.length === 0}
                    fetchData={this.fetchData.bind(this)}
                    clearOutput={this.clearOutput.bind(this)} />
                <OutputWrapper articles={this.state.articles} />
                {this.state.isFetching ?
                    <div>Loading articles...</div> : ''}
            </div>
        );
    }
}

export default App;
