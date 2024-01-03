'use client'
import React from 'react'
import "./style.scss"
import { DatePicker, Space } from 'antd'
const { RangePicker } = DatePicker
const onChange = (value, dateString) => {
 
}
const onOk = value => {

}
const App = () => (
  <Space direction='vertical' size={12}>
    <RangePicker
      showTime={{
        format: 'HH:mm'
      }}
      format='YYYY-MM-DD HH:mm'
      onChange={onChange}
      onOk={onOk}
      bordered={false}
    />
  </Space>
)
export default App
