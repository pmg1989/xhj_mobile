import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'components'

const HelpTabBar = ({ children }) => {
  return (
    <Fragment>
      {children}
      <TabBar hidden selectedTab="" />
    </Fragment>
  )
}

HelpTabBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HelpTabBar
