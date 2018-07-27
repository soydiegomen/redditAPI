import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleList extends Component {
  render() {

    return (
      <div>
        <h3>Simple Section</h3>
        {this.props.simplePosts.length > 0 &&
          <ul>
            {this.props.simplePosts.map((post, i) => <li key={i}>{post.title}</li>)}
          </ul>
        }
      </div>
    )
  }
}

export default SimpleList;
