import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

App.propTypes = {
  children: PropTypes.node,
}

export default App
