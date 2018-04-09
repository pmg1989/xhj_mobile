import React from 'react'
import { List } from 'antd-mobile'
import styles from './Footer.less'

const Item = List.Item

const Footer = () => {
  return (
    <List className={styles.footer_box}>
      <Item>
        <span className={styles.text}>没有找到相关答案？可以联系<a className={styles.link} href="">在线客服</a></span>
      </Item>
    </List>
  )
}

export default Footer
