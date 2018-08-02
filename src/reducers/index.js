import { combineReducers } from 'redux';

import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_SIMPLE_POSTS,
  SUBMIT_SUBREDDIT,
  UPDATE_POST_TIME
} from '../actions';

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

function simplePosts(state = [], action) {
    switch (action.type) {
      case RECEIVE_SIMPLE_POSTS:
        return action.posts;
      default:
        return state;
    }
}

function sentSubreddit(state = 'nodejs', action) {
  switch (action.type) {
    case SUBMIT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function updatedPostTime(state = new Date(2018, 11, 24, 1, 1, 1, 0), action) {
  switch (action.type) {
    case UPDATE_POST_TIME:
      return Date.now();
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  simplePosts,
  sentSubreddit,
  updatedPostTime
});

export default rootReducer;
