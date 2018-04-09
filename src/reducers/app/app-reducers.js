import { createReducer } from 'redux-create-reducer'
import Immutable from 'immutable'
import { appConstants } from 'constants'

const $app = Immutable.fromJS({
  tabBar: {
    active: 'home',
    show: true,
  },
})

const app = createReducer($app, {
  [appConstants.CHANGE_TABBAR] (state, { selectedTab }) {
    return state.setIn(['tabBar', 'active'], selectedTab)
  },
  [appConstants.TOGGLE_TABBAR] (state, { status = 0 }) {
    if (status !== 0) {
      return state.setIn(['tabBar', 'show'], status)
    }
    const show = state.getIn(['tabBar', 'show'])
    return state.setIn(['tabBar', 'show'], !show)
  },
})

export default app
