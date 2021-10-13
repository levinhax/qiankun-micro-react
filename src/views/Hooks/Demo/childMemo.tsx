import React, { memo } from 'react'

const ChildMemo = ({ getList }: any) => {
  console.log('child-memo-render')
  return (
    <>
      {getList(5).map((item: any) => (
        <div key={item.id}>name：{item.name}</div>
      ))}
    </>
  )
}

export default memo(ChildMemo)
