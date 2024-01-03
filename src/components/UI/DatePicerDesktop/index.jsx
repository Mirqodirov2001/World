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
  <Space className=' w-[220px]' direction='vertical' size={32}>
    <RangePicker
      showTime={{
        format: 'HH:mm'
      }}
      format='YYYY-MM-DD HH:mm'
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
)
export default App
