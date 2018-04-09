import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Container, Header, TabBar } from 'components'
import { newsActions } from 'actions/news'

class Category extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    const containerProps = {
      renderHeader: <Header>产品分类</Header>,
      renderTabBar: <TabBar selectedTab="product" />,
    }

    return (
      <Container {...containerProps}>
        product category
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Category)
