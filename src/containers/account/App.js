import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'components'

const AccountApp = ({ children }) => {
  return (
    <Fragment>
      {children}
      <TabBar selectedTab="myCenter" />
    </Fragment>
  )
}

AccountApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AccountApp
