import React from 'react'
import { Header, Icon } from 'components'
import styles from './Error.less'

const Error = () => {
  return (
    <div className="content-box">
      <Header>页面未找到</Header>
      <div className="content">
        <div className={styles.box}>
          <Icon className={styles.icon} type={require('svg/cry.svg')} />
          <p>抱歉哦~您访问的页面已经逃离地球表面</p>
        </div>
      </div>
    </div>
  )
}

export default Error
