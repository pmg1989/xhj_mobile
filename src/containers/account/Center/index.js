import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Container, Header, TabBar } from 'components'
import { newsActions } from 'actions/news'

class Center extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    const containerProps = {
      renderHeader: <Header>用户中心</Header>,
      renderTabBar: <TabBar selectedTab="myCenter" />,
    }

    return (
      <Container {...containerProps}>
        account center
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Center)
