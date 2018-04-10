import React from 'react'
// import PropTypes from 'prop-types'
import { connect, Container, Header } from 'components'
import Content from './Content'

const HowtoMaintain = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>维修流程</Header>,
  }

  return (
    <Container {...containerProps}>
      <Content />
    </Container>
  )
}

export default connect()(module)(HowtoMaintain)
