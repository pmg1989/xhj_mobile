import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, Container, Header } from 'components'
import { scrollToAnchor } from 'utils/tools'
import AccordionList from '../AccordionList'
import AccordionOne from './AccordionOne'
import AccordionTwo from './AccordionTwo'
import AccordionThree from './AccordionThree'
import AccordionFour from './AccordionFour'
import Footer from '../Footer'

class CostStatement extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
  }

  state = {
    activeKey: this.props.query.question,
  }

  componentDidMount () {
    setTimeout(() => {
      const question = this.props.query.question
      question && scrollToAnchor(this.props.query.question)
    }, 0)
  }

  render () {
    const { activeKey } = this.state

    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>费用说明</Header>,
    }

    const handleAccordionChange = (key) => {
      this.setState({ activeKey: key })
    }

    return (
      <Container {...containerProps}>
        <AccordionList activeKey={activeKey} onAccordionChange={handleAccordionChange}>
          <AccordionOne />
          <AccordionTwo />
          <AccordionThree />
          <AccordionFour />
        </AccordionList>
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.location.query,
})

export default connect(mapStateToProps)(module)(CostStatement)
