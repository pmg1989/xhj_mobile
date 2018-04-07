import React, { Fragment } from 'react'
import { Link } from 'react-router'
import { Flex, List } from 'antd-mobile'
import styles from './ListItem.less'

const Item = List.Item

const ListItem = () => {
  return (
    <Fragment>
      <List renderHeader={() => '点击以下关键词，快速查找问题'} className={styles.list_box}>
        <Item extra="更多" arrow="horizontal" onClick={() => {}} platform="android">费用说明</Item>
        <Item>
          <Flex className={styles.item} justify="around">
            <Link className={styles.link} to={'/help/coststatement?question=1'}>租金支付</Link>
            <Link className={styles.link} to={'/help/coststatement?question=4'}>意外保障服务费</Link>
            <Link className={styles.link} to={'/help/coststatement?question=5'}>什么是预授权</Link>
          </Flex>
          <Flex className={styles.item} justify="around">
            <Link className={styles.link} to={'/help/coststatement?question=6'}>扣款周期</Link>
            <Link className={styles.link} to={'/help/coststatement?question=9'}>续租费用</Link>
            <Link className={styles.link} to={'/help/coststatement?question=11'}>买断费用</Link>
          </Flex>
        </Item>
      </List>
      <List className={styles.list_box}>
        <Item extra="更多" arrow="horizontal" onClick={() => {}} platform="android">租前了解</Item>
        <Item>
          <Flex className={styles.item} justify="around">
            <Link className={styles.link} to={'/help/beforerent?question=1'}>关于享换机</Link>
            <Link className={styles.link} to={'/help/beforerent?question=2'}>怎么租手机</Link>
            <Link className={styles.link} to={'/help/beforerent?question=3'}>租机到期</Link>
          </Flex>
          <Flex className={styles.item} justify="around">
            <Link className={styles.link} to={'/help/beforerent?question=4'}>租机优势</Link>
            <Link className={styles.link} to={'/help/beforerent?question=9'}>冻结额度不够</Link>
          </Flex>
        </Item>
      </List>
    </Fragment>
  )
}

export default ListItem
