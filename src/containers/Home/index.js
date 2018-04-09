import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect, Header, TabBar } from 'components'
import { newsActions } from 'actions/news'

class Home extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
  }

  render () {
    const headerProps = {
      leftContent: '',
      icon: null,
      onLeftClick () {},
    }

    return (
      <div className="content-box">
        <Header {...headerProps}>首页</Header>
        <div className="content">
          home index
          <Link to={'/help'} style={{ color: '#00a699' }}>go to help</Link>
        </div>
        <TabBar />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Home)
