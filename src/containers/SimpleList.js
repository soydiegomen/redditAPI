import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from '../components/Posts';
/*For use state */
import { connect } from 'react-redux';
import {
  fetchSimplePosts,
  submitSubreddit,
  updatePostTime
} from '../actions';

let counter = 0;

class SimpleList extends Component {



  componentDidMount() {
    const { dispatch, sentSubreddit } = this.props;
    dispatch(fetchSimplePosts(sentSubreddit));
  }

  componentDidUpdate(prevProps) {
    if (this.props.sentSubreddit !== prevProps.sentSubreddit) {
      console.log('COUNTER: ' + counter);
      counter++;
      const { dispatch, sentSubreddit } = this.props;
      dispatch(fetchSimplePosts(sentSubreddit));
    }
  }

  render() {
    const { dispatch, simplePosts, sentSubreddit, updatedPostTime } = this.props;
    let input;

    return (
      <div>
        <h3>Selected Reddit: {sentSubreddit}</h3>
        <span>Last updated at: {new Date(updatedPostTime).toLocaleTimeString()}</span>
        <form
        onSubmit={function (e) {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          dispatch(submitSubreddit(input.value));
          input.value = '';
        }}>
          <label>Ingresa un tema:</label>
          <input ref= {function (node) { input = node; }} />
          <button type="submit">
            Enviar
          </button>
        </form>
        {simplePosts.length > 0 &&
          <Posts posts={simplePosts} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { simplePosts, sentSubreddit, updatedPostTime  } = state;

  return {
    simplePosts,
    sentSubreddit,
    updatedPostTime
  }
}

export default connect(mapStateToProps)(SimpleList);
