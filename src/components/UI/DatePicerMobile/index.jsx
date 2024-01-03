'use client'
import React from 'react'
import dayjs from 'dayjs'
import { DatePicker, Space } from 'antd'
const { RangePicker } = DatePicker
const onChange = date => {
  if (date) {
  } else {
  }
}
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
  } else {
  }
}
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()]
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()]
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()]
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()]
  }
]
const App = () => (
  <Space direction='vertical' size={12}>
    <RangePicker presets={rangePresets} onChange={onRangeChange} bordered={false} />
  </Space>
)
export default App
