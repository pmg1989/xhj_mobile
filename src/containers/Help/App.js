import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'components'

const HelpApp = ({ children }) => {
  return (
    <Fragment>
      {children}
      <TabBar hidden selectedTab="" />
    </Fragment>
  )
}

HelpApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HelpApp
