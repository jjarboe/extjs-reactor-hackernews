var React = require('react'),
    $     = require('jquery'),

    Item  = require('./item'),

    List;

import {reactify} from '@extjs/reactor/';

Ext.require("Ext.grid.Grid");
const Grid = reactify('grid');

List = React.createClass({
    getInitialState: function () {
        return { posts: [] };
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
                this.setState({ posts: result.hits });
            }.bind(this),
            error: function () {
                alert('error getting posts. please try again later');
            }
        });
    },
    render: function () {
console.log('POSTS', this.state.posts);
        return <ol className="posts">
            {this.state.posts.map(function (post) {
                return <Item key={post.objectID} post={post}/>
            })}
        </ol>;
/*
        return <Grid
                 store={{
                     data: [{objectId: 'Loading'}]
                 }}
                 columns={[
                     { text: 'Id', dataIndex: 'objectId', flex: 1 }
                 ]}
             />;
*/
    }
});

module.exports = List;
