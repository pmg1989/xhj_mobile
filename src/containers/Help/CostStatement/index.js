import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, Container, Header, TabBar } from 'components'
import ListAccordion from './ListAccordion'

class CostStatement extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    const { question } = this.props.query
    const containerProps = {
      renderHeader: <Header>费用说明</Header>,
      renderTabBar: <TabBar />,
    }

    return (
      <Container {...containerProps}>
        <ListAccordion activeKey={question} />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.location.query,
})

export default connect(mapStateToProps)(module)(CostStatement)
