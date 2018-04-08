import { combineReducers } from 'redux-immutable'
import routerReducer from './route-reducers'
import app from './app'
import tasks from './tasks'
import news from './news'

export default combineReducers({
  routing: routerReducer,
  app,
  tasks,
  news,
})
