import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect, Container, Header, TabBar } from 'components'
import GridHeader from './GridHeader'
import ListItem from './ListItem'

class Help extends Component {
  static propTypes = {
  }

  componentDidMount () {
  }

  render () {
    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>帮助中心</Header>,
      renderTabBar: <TabBar hidden selectedTab="" />,
    }

    return (
      <Container {...containerProps}>
        <GridHeader />
        <ListItem />
      </Container>
    )
  }
}

export default connect()(module)(Help)
