import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect, Container, Header, TabBar } from 'components'
import ListAccordion from './ListAccordion'

class CostStatement extends Component {
  static propTypes = {
  }

  componentDidMount () {
  }

  render () {
    const containerProps = {
      renderHeader: <Header>费用说明</Header>,
      renderTabBar: <TabBar />,
    }

    return (
      <Container {...containerProps}>
        <ListAccordion />
      </Container>
    )
  }
}

export default connect()(module)(CostStatement)
