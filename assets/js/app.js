import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/styles.css';

import { reactify, install as extjs_install } from '@extjs/reactor';

import { Panel, TabPanel } from '@extjs/reactor/modern';

extjs_install( { viewport: true } );
window.React = React;

var Header = require('./header'),
    Posts = require('./posts'),
    Frontpage,
    App;

require('../../ext/packages/d3/production/d3.js');

const D3Heatmap = reactify('d3-heatmap');
class Heatmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: Ext.create('Ext.data.Store', {
                proxy: {
                    type: 'ajax',
                    url: '/rec_counts.json',
                    reader: { type: 'json', rootProperty: 'count_by_day_and_hour' }
                },
                autoLoad: true
            })
        };
    }
    render() {
        return <div>
            <h1>Postings by day and hour</h1>
            <D3Heatmap
                height={ 600 }
                padding={{ top:30, right:30, bottom:50, left:60 }}
                yAxis={{ title: { text: 'Hour'}, step: 1, field: 'hour' }}
                xAxis={{ title: { text: 'Day'}, scale: { type: 'ordinal'}, field: 'day' }}
                colorAxis={{
                    scale: { type: 'linear', range: ['white','#FC6621'] }, field: 'count'
                }}
                store={ this.state.store }
            />
        </div>;
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
                <Panel title="Front page" ><Frontpage /></Panel >
                <Panel title="Heatmap"><Heatmap title="Heatmap" /></Panel >
            </TabPanel>;
    }
});

App.start = function() {
    Ext.onReady(function() {
        ReactDOM.render( <App /> , document.getElementById('app'));
    })
};

module.exports = window.App = App;