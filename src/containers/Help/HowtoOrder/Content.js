import React from 'react'
import styles from './Content.less'

const Content = () => {
  return (
    <div className={styles.images_box}>
      <img alt="" src={require('images/help/order_1.png')} />
      <img alt="" src={require('images/help/order_2.png')} />
      <img alt="" src={require('images/help/order_3.png')} />
    </div>
  )
}

export default Content
