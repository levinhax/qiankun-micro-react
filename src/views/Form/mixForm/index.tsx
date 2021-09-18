import React, { useRef } from 'react'
import { Button, Divider } from 'antd'
import MixForm1 from './components/mixForm1'
import MixForm2 from './components/mixForm2'
import MixForm3 from './components/mixForm3'
import classes from './index.module.css'

interface MixFormProp {
  submitForm: any
}

const MixForm = () => {
  const mixForm1Ref = useRef<MixFormProp>()
  const mixForm2Ref = useRef<MixFormProp>()
  const mixForm3Ref = useRef<MixFormProp>()

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
  }

  const handleSubmit = () => {
    let mixForm1Data = new Promise(resolve => {
      mixForm1Ref.current?.submitForm((value: any) => {
        resolve(value)
      })
    })
    let mixForm2Data = new Promise(resolve => {
      mixForm2Ref.current?.submitForm((value: any) => {
        resolve(value)
      })
    })
    let mixForm3Data = new Promise(resolve => {
      mixForm3Ref.current?.submitForm((value: any) => {
        resolve(value)
      })
    })

    Promise.all([mixForm1Data, mixForm2Data, mixForm3Data]).then(res => {
      console.log('表单数据: ', res)
    })
  }

  return (
    <div className={classes['mixForm']}>
      <Divider orientation="left">基本属性</Divider>
      <MixForm1 ref={mixForm1Ref} formItemLayout={formItemLayout} />
      <Divider orientation="left">高级属性</Divider>
      <MixForm2 ref={mixForm2Ref} formItemLayout={formItemLayout} />
      <Divider orientation="left">业务相关</Divider>
      <MixForm3 ref={mixForm3Ref} formItemLayout={formItemLayout} />
      <Button type="primary" onClick={handleSubmit} style={{ marginLeft: 96 }}>
        提交
      </Button>
    </div>
  )
}

export default MixForm
