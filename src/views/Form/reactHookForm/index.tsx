import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Button } from 'antd'

interface IFormInput {
  firstName: string
  lastName: string
  iceCreamType: { label: string; value: string }
}

const FormDemo = () => {
  const { control, handleSubmit } = useForm<IFormInput>()

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data))
  }

  return (
    <form>
      <label>First Name</label>
      <Controller
        render={({ field }) => <Input {...field} className="materialUIInput" />}
        name="firstName"
        control={control}
        defaultValue=""
      />
      <label>First Name</label>
      <Controller render={({ field }) => <Input {...field} />} name="lastName" control={control} defaultValue="" />
      <Button type="primary" onClick={handleSubmit(onSubmit)}>
        提交
      </Button>
    </form>
  )
}

export default FormDemo
