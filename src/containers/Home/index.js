import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect, Container, Header, TabBar } from 'components'
import { newsActions } from 'actions/news'

class Home extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    const headerProps = {
      leftContent: '',
      icon: null,
      onLeftClick () {},
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>首页</Header>,
      renderTabBar: <TabBar selectedTab="home" />,
    }

    return (
      <Container {...containerProps}>
        home index
        <Link to={'/help'} style={{ color: '#00a699' }}>go to help</Link>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Home)
