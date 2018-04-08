import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from './ListAccordion.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey }) => {
  return (
    <List renderHeader={'租机'}>
      <Accordion accordion defaultActiveKey={activeKey}>
        <Panel key="1" header="1.租机时需要支付哪些费用？">
          <Flex wrap="wrap" className={styles.item_box}>
            租机费用包括：<br />
            • 总租金（每月租金 X 租期时长）；<br />
            • 押金（根据信用评估情况可减免）；<br />
            • 意外保障服务费（享换机为每个租机用户定制意外保障服务，每个机器的费用不同）。
          </Flex>
        </Panel>
        <Panel key="2" header="2.租机时怎么支付租金？">
          <Flex wrap="wrap" className={styles.item_box}>
            用户需按月支付租金，享换机目前支持两种租金扣款方式。<br />
            1.支付宝代扣：用户与享换机签订支付宝代扣协议，享换机每月自动从用户支付宝账号扣除相应租金。<br />
            2.资金预授权转消费：对于信用卡用户享换机每月自动从用户预授权中扣除相应租金。
           </Flex>
        </Panel>
        <Panel key="3" header="3.租机时怎么支付押金？">
          <Flex wrap="wrap" className={styles.item_box}>
            押金无需用户支付，只需要冻结花呗或信用卡预授权进行信用担保，每期还款租金，押金无需还款。手机归还后，释放花呗或信用卡的额度。
          </Flex>
        </Panel>
        <Panel key="4" header="4.租机时怎么支付意外保障服务费？">
          <Flex wrap="wrap" className={styles.item_box}>
            为了更好享受租赁服务，用户需购买一份手机意外险，享受租赁期间租赁手机意外损伤免费维修服务。<br />
            选择您喜爱的机型和属性之后，生成具体的意外保障服务费用，费用和首期租金一起支付。<br />
            续租时会产生新的意外保障服务费，也是随着续租的首期租金一起支付。
          </Flex>
        </Panel>
        <Panel key="5" header="5.什么是预授权？">
          <Flex wrap="wrap" className={styles.item_box}>
            用户在享换机下单需要进行信用担保，信用担保有助于用户通过信用评估，信用担保方式为资金预授权，
            通过冻结用户第三信用账户（信用卡/花呗）额度实现，资金预授权冻结的额度不产生实际消费，无需还款。
            享换机支持信用卡预授权与花呗预授权两种资金预授权方式。
          </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}
AccordionOne.propTypes = {
  activeKey: PropTypes.string,
}

const AccordionTwo = ({ activeKey }) => {
  return (
    <List renderHeader={'还款'}>
      <Accordion accordion defaultActiveKey={activeKey}>
        <Panel key="6" header="6.扣款周期是多久？">
          <Flex wrap="wrap" className={styles.item_box}>
            支付方式不同，扣款周期也不同。<br />
            • 如果您选择的是蚂蚁花呗或支付宝代扣支付，每期周期为1个月，总期数视租赁周期而定。<br />
            • 如果您选择的是信用卡支付，每期周期为25天，总期数视租赁周期而定。
          </Flex>
        </Panel>
        <Panel key="7" header="7.每月什么时候还款？">
          <Flex wrap="wrap" className={styles.item_box}>
            不同支付方式，还款时间不同。<br />
            • 蚂蚁花呗支付：具体还款日以花呗还款日为准。<br />
            • 支付宝代扣支付：确认签收后一个自然月首次扣款（含意外保障服务费），后续每月扣款日即为您签收日。如遇当月不存在的日期，顺延至次月1日扣款。<br />
            • 信用卡支付：首期下单成功即扣一期租金（含保险费），剩余周期的还款日以信用卡还款日为准。
           </Flex>
        </Panel>
        <Panel key="8" header="8.信用卡还款为什么有时一个月会有2笔还款账单？">
          <Flex wrap="wrap" className={styles.item_box}>
            信用卡1个月为一个还款周期，享换机用信用卡冻结额度，25天为一个扣款周期，所以有时会产生一个月有2笔还款账单的现象。
          </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}
AccordionTwo.propTypes = {
  activeKey: PropTypes.string,
}

const AccordionThree = ({ activeKey }) => {
  return (
    <List renderHeader={'续租'}>
      <Accordion accordion defaultActiveKey={activeKey}>
        <Panel key="9" header="9.续租租金和租机时的租金是一样的吗？">
          <Flex wrap="wrap" className={styles.item_box}>      
            用户在租赁到期可以选择继续租用手机，有不同时长可以选择，并且可以多次续租，续租租金在租赁到期重新计算，可能与当前租金有所不同。
          </Flex>
        </Panel>
        <Panel key="10" header="10.续租需要再次冻结押金吗？">
          <Flex wrap="wrap" className={styles.item_box}>
            花呗用户：续租时不需要再次冻结预授权，继续用租机时冻结的预授权作为信用担保。<br />
            信用卡用户：续租时需先用花呗重新冻结预授权，冻结成功后，7个工作日内释放信用卡预授权。
           </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}
AccordionThree.propTypes = {
  activeKey: PropTypes.string,
}

const AccordionFour = ({ activeKey }) => {
  return (
    <List renderHeader={'买断'}>
      <Accordion accordion defaultActiveKey={activeKey}>
        <Panel key="11" header="11.买断需要付多少钱？">
          <Flex wrap="wrap" className={styles.item_box}>                        
            用户在租赁到期可选择支付一定费用买断手机，买断费用以下单时协议里的买断价为准，也可以去订单详情的租赁信息中查看。
          </Flex>
        </Panel>
        <Panel key="12" header="12.买断的金额可以分期付吗，付款方式是什么？">
          <Flex wrap="wrap" className={styles.item_box}>
            买断需一次性支付金额。<br />
            • 若冻结预授权=买断金额，则预授权转消费；<br />
            • 若冻结预授权&gt;买断金额，则其中等于买断金额的预售前转消费，其余预授权释放给用户；<br />
            • 若冻结预授权&lt;买断金额，则全部预授权转消费后，剩余金额需一次性支付。
           </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}
AccordionFour.propTypes = {
  activeKey: PropTypes.string,
}

const ListAccordion = ({ activeKey }) => {
  return (
    <Fragment>
      <AccordionOne activeKey={activeKey} />
      <AccordionTwo activeKey={activeKey} />
      <AccordionThree activeKey={activeKey} />
      <AccordionFour activeKey={activeKey} />
    </Fragment>
  )
}

ListAccordion.propTypes = {
  activeKey: PropTypes.string,
}

export default ListAccordion
