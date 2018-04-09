import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'components'

const ProductApp = ({ children }) => {
  return (
    <Fragment>
      {children}
      <TabBar selectedTab="product" />
    </Fragment>
  )
}

ProductApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProductApp
