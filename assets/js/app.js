import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';

import { install as extjs_install } from '@extjs/reactor';

import { TabPanel } from '@extjs/reactor/modern';

extjs_install( { viewport: true } );
window.React = React;

var Header = require('./header'),
    Posts = require('./posts'),
    Frontpage,
    App;

class Heatmap extends React.Component {
    render() {
        return <h1>Heatmap</h1>;
    }
}

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
        return <TabPanel
                    height={ window.innerHeight }
                    tabBarPosition='bottom'
            >
                <Frontpage title="Front page" />
                <Heatmap title="Heatmap" />
            </TabPanel>;
    }
});

App.start = function() {
    Ext.onReady(function() {
        ReactDOM.render( <App /> , document.getElementById('app'));
    })
};

module.exports = window.App = App;