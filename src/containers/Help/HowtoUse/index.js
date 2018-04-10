import React from 'react'
// import PropTypes from 'prop-types'
import { connect, Container, Header } from 'components'
import GridHeader from './GridHeader'
import ListItem from './ListItem'

const HowToUse = () => {
  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>租机流程</Header>,
  }

  return (
    <Container {...containerProps}>
      <GridHeader />
      <ListItem />
    </Container>
  )
}

export default connect()(module)(HowToUse)

