import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, Container, Header, TabBar } from 'components'
import { scrollToAnchor } from 'utils/tools'
import AccordionOne from './AccordionOne'
import AccordionTwo from './AccordionTwo'
import AccordionThree from './AccordionThree'
import Footer from '../Footer'

class BeforeRent extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
  }

  componentDidMount () {
    setTimeout(() => {
      const question = this.props.query.question
      question && scrollToAnchor(this.props.query.question)
    }, 0)
  }

  render () {
    const { question } = this.props.query

    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>租前了解</Header>,
      renderTabBar: <TabBar />,
    }

    return (
      <Container {...containerProps}>
        <AccordionOne activeKey={question} />
        <AccordionTwo activeKey={question} />
        <AccordionThree activeKey={question} />
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.location.query,
})

export default connect(mapStateToProps)(module)(BeforeRent)
