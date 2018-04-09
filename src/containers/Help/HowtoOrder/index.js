import React from 'react'
// import PropTypes from 'prop-types'
import { connect, Container, Header } from 'components'
import Content from './Content'

const HowtoOrder = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>下单流程</Header>,
  }

  return (
    <Container {...containerProps}>
      <Content />
    </Container>
  )
}

export default connect()(module)(HowtoOrder)
