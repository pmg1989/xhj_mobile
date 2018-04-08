import { createReducer } from 'redux-create-reducer'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { appConstants } from 'constants'

const $base = Immutable.fromJS({
  selectedTab: 'home',
})

const base = createReducer($base, {
  [appConstants.CHANGE_TABBAR] (state, { selectedTab }) {
    return state.set('selectedTab', selectedTab)
  },
})

export default combineReducers({
  base,
})
