import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ol>
          {this.props.posts.map((post, i) => <li key={i}>{post.title}</li>)}
        </ol>
      </div>
    );
  }

}



export default Posts;
