import React from 'react'
import { Link } from 'react-router'
import { Grid } from 'antd-mobile'
import styles from './GridHeader.less'

const GridHeader = () => {
  const data = [
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '租机流程' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '下单流程' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '维修流程' },
    { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '投诉建议' },
  ]

  const links = [
    '/help/howtouse',
    '/help/howtoorder',
    '/help/howtomaintain',
    '/help/complaintadvice',
  ]

  return (
    <Grid
      className={styles.thumb_box}
      data={data}
      square={false}
      hasLine={false}
      renderItem={(item, index) => (
        <Link className={styles.item_content} to={links[index]}>
          <img className={styles.grid_icon} src={item.icon} alt="" />
          <div className={styles.grid_text}>{item.text}</div>
        </Link>
      )}
    />
  )
}

export default GridHeader
