import { createReducer } from 'redux-create-reducer'
import Immutable from 'immutable'
import { appConstants } from 'constants'

const $app = Immutable.fromJS({
  tabBar: {
    active: 'home',
    show: false,
  },
})

const app = createReducer($app, {
  [appConstants.CHANGE_TABBAR] (state, { selectedTab }) {
    return state.setIn(['tabBar', 'active'], selectedTab)
  },
  [appConstants.TOGGLE_TABBAR] (state, { status = false }) {
    const show = state.getIn(['tabBar', 'show'])
    return state.setIn(['tabBar', 'show'], status || !show)
  },
})

export default app
