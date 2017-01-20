var React = require('react'),
    $     = require('jquery'),

    Item  = require('./item'),

    List;

import { Grid } from '@extjs/reactor/modern';

List = React.createClass({
    getInitialState: function () {
        return {
            store: Ext.create('Ext.data.Store', {
                fields: ['title', 'url'],
                data: [],
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json',
                        rootProperty: 'posts'
                    }
                }
            })
        };
    },
    componentWillMount: function () {
        this.fetchLatestNews();
    },
    fetchLatestNews: function () {
        $.ajax({
            url:       'https://hn.algolia.com/api/v1/search?tags=front_page',
            dataType:  'json',
            data:      { format: 'json' },
            success: function (result) {
                this.state.store.loadData(result.hits);
            }.bind(this),
            error: function () {
                alert('error getting posts. please try again later');
            }
        });
    },
    render: function () {
        return (
            <Grid
                 columns={[
                     { text: 'Title', cell: { encodeHtml: false},
                        xtype: 'templatecolumn', dataIndex: 'title',
                        tpl: '<a href="{url}">{title}</a>', flex: 1
                     }
                 ]}
                 height={ 750 }
                 width="100%"
                 store={this.state.store}
             />
        );
    }
});

module.exports = List;
