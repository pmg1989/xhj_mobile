import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Container, Header } from 'components'
import { newsActions } from 'actions/news'

class Product extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    const containerProps = {
      renderHeader: <Header>享换机信用租机</Header>,
    }

    return (
      <Container {...containerProps}>
        product index
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Product)
