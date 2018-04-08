import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Header, TabBar } from 'components'
import { newsActions } from 'actions/news'

class Center extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="content-box">
        <Header>享换机信用租机</Header>
        <div className="content">
          account center
        </div>
        <TabBar />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Center)
