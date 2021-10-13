import React, { forwardRef } from 'react'
import { Input } from 'antd'

const ChildInput = (props: any, ref: any) => {
  console.log('ChildInput: ', props)
  return <Input ref={ref} />
}

export default forwardRef(ChildInput)
