import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ renderHeader, renderTabBar, children }) => {
  return (
    <div className="content-box">
      {renderHeader}
      <div className="content">
        {children}
      </div>
      {renderTabBar}
    </div>
  )
}

Container.propTypes = {
  renderHeader: PropTypes.node,
  renderTabBar: PropTypes.node,
  children: PropTypes.node,
}

export default Container
