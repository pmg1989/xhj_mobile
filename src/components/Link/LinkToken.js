import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
// import { queryString } from 'utils/tools'

const MyLink = ({ children, to, ...props }) => {
  // const symbol = to.includes('?') ? '&' : '?'
  // const mobile = queryString('mobile')
  // const token = queryString('token')
  // if (!!mobile && !!token) {
  //   to = `${to}${symbol}mobile=${queryString('mobile')}&token=${queryString('token')}`
  // }

  return (
    <Link to={to} {...props}>{children}</Link>
  )
}

MyLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
}

export default MyLink
