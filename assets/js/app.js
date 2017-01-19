import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';

require('script!../../build/extjs/ext');
import { install } from '@extjs/reactor';
install();

window.React = React;

var Header = require('./header'),
    Posts = require('./posts'),
    App;

App = React.createClass({
    render: function() {
        return <div >
            <Header />
            <div className="container content" >
            <Posts />
            </div > </div > ;
    }
});

App.start = function() {
    Ext.onReady(function() {
        ReactDOM.render( <App /> , document.getElementById('app'));
    })
};

module.exports = window.App = App;