import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';

import { install } from '@extjs/reactor';
install();

window.React = React;

var Header = require('./header'),
    Posts = require('./posts'),
    Frontpage,
    App;

Frontpage = React.createClass({
    render: function() {
        return <div >
            <Header />
            <div className="container content" >
            <Posts />
            </div > </div > ;
    }
});

App = React.createClass({
    render: function() {
        return <Frontpage /> ;
    }
});

App.start = function() {
    Ext.onReady(function() {
        ReactDOM.render( <App /> , document.getElementById('app'));
    })
};

module.exports = window.App = App;