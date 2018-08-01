import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from '../components/Posts';
/*For use state */
import { connect } from 'react-redux';
import {
  fetchSimplePosts,
  submitSubreddit
} from '../actions';

class SimpleList extends Component {

  componentDidMount() {
    const { dispatch, sentSubreddit } = this.props;
    dispatch(fetchSimplePosts(sentSubreddit));
  }

  componentDidUpdate(prevProps) {
    if (this.props.sentSubreddit !== prevProps.sentSubreddit) {
      const { dispatch, sentSubreddit } = this.props;
      dispatch(fetchSimplePosts(sentSubreddit));
    }
  }

  render() {
    const { dispatch, simplePosts } = this.props;
    let input;

    return (
      <div>
        <h3>Simple Section</h3>
        <form
        onSubmit={function (e) {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          console.log('VALOR', input.value);
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
  const { simplePosts, sentSubreddit  } = state;

  return {
    simplePosts,
    sentSubreddit
  }
}

export default connect(mapStateToProps)(SimpleList);
