import React from 'react'
import classnames from 'classnames'
import { Grid } from 'antd-mobile'
import styles from './GridHeader.less'

const GridHeader = () => {
  const data = [
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '挑选机器' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '押金0支付' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '月付租金' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '归还/买断' },
  ]

  return (
    <Grid
      className={styles.thumb_box}
      itemStyle={{ backgroundColor: '#f8f8f8' }}
      activeStyle={false}
      data={data}
      square
      hasLine={false}
      renderItem={(item, index) => (
        <div className={classnames(styles.item_content, index === data.length - 1 && styles.last)}>
          <img className={styles.grid_icon} src={item.icon} alt="" />
          <div className={styles.grid_text}>{item.text}</div>
        </div>
      )}
    />
  )
}

export default GridHeader
