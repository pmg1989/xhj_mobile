import React, { Component } from 'react'
import classnames from 'classnames'
import { browserHistory } from 'react-router'
import { TabBar } from 'antd-mobile'
import { Icon } from 'components'
import styles from './TabBar.less'

const dicType = {
  home: '/',
  product: '/product/category',
  myCenter: '/account/center',
}

class MyTabBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      hidden: false,
    }
  }

  handlePress = type => () => {
    this.setState({ selectedTab: type })
    browserHistory.push(dicType[type])
  }

  render () {
    const { selectedTab, hidden } = this.state

    return (
      <div className={classnames(styles.tabbar_box, styles.fixed)}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#c83b33"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            icon={<Icon type={require('svg/tab-bar/home.svg')} />}
            selectedIcon={<Icon type={require('svg/tab-bar/home-active.svg')} />}
            title="首页"
            key="home"
            selected={selectedTab === 'home'}
            onPress={this.handlePress('home')}
          />
          <TabBar.Item
            icon={<Icon type={require('svg/tab-bar/product.svg')} />}
            selectedIcon={<Icon type={require('svg/tab-bar/product-active.svg')} />}
            title="商品"
            key="product"
            selected={selectedTab === 'product'}
            onPress={this.handlePress('product')}
          />
          <TabBar.Item
            icon={<Icon type={require('svg/tab-bar/myCenter.svg')} />}
            selectedIcon={<Icon type={require('svg/tab-bar/myCenter-active.svg')} />}
            title="我的"
            key="myCenter"
            selected={selectedTab === 'myCenter'}
            onPress={this.handlePress('myCenter')}
          />
        </TabBar>
      </div>
    )
  }
}

export default MyTabBar
