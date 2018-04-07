import React from 'react'
import { Grid } from 'antd-mobile'
import styles from './GridHeader.less'

const GridHeader = () => {
  const data = [
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '租机流程' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '下单流程' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '维修流程' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '投诉建议' },
  ]

  return (
    <Grid className={styles.thumb_box} data={data} square={false} hasLine={false} />
  )
}

export default GridHeader
