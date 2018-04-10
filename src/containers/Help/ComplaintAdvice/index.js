import React from 'react'
// import PropTypes from 'prop-types'
import { connect, Container, Header } from 'components'
import ListItem from './ListItem'

const ComplaintAdvice = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>投诉建议</Header>,
  }

  return (
    <Container {...containerProps}>
      <ListItem />
    </Container>
  )
}

export default connect()(module)(ComplaintAdvice)
