import React, { useImperativeHandle, forwardRef } from 'react'
import { Form, Input } from 'antd'

const MixForm2 = (props: any, ref: any) => {
  const { formItemLayout } = props
  const [form] = Form.useForm()
  useImperativeHandle(ref, () => ({
    submitForm: (cb: Function) => {
      handleSubmit(cb)
    },
  }))

  const handleSubmit = async (cb: Function) => {
    try {
      const values = await form.validateFields()
      cb(values)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item name="account" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="请输入" />
      </Form.Item>
    </Form>
  )
}

export default forwardRef(MixForm2)
