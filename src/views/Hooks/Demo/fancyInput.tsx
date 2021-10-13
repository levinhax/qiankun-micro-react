import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react'

function FancyInput(props: any, ref: any) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(0)

  //   useImperativeHandle(ref, () => ({
  //     focus: () => {
  //       inputRef.current && inputRef.current.focus()
  //     },
  //   }))

  useImperativeHandle(ref, () => ({
    setValue,
  }))

  return (
    <>
      <div>fancy-input-value:{value}</div>
      <input ref={inputRef} />
    </>
  )
}
export default forwardRef(FancyInput)
