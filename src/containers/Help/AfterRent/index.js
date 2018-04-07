import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Header } from 'components'
import { newsActions } from 'actions/news'

class AfterRent extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="content-box">
        <Header>享换机 - 到期了解</Header>
        <div className="content">
          help AfterRent
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(AfterRent)
