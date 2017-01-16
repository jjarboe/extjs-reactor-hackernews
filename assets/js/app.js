
import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';

//import { install } from '@extjs/reactor';
//import { Grid } from '@extjs/reactor/modern';

// Set up the Ext JS Reactor
//install({ viewport: true });
//install();

window.React = React;

var Header = require('./header'),
    Posts = require('./posts'),
    App;

App = React.createClass({
    render: function() {
        return <div >
            <Header / >
            <div className = "container content" >
            <Posts / >
            </div >
        </div > ;
    }
});

App.start = function() {
    ReactDOM.render( < App / > , document.getElementById('app'));
};

module.exports = window.App = App;