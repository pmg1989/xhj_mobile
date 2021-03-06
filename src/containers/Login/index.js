import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Header } from 'components'
import { newsActions } from 'actions/news'

class Login extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="content-box">
        <Header>享换机-登录</Header>
        <div className="content">
          login
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Login)
