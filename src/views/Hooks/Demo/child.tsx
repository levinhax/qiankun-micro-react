import React from 'react'

const Child = ({ getList }: any) => {
  console.log('child-render')
  return (
    <>
      {getList(5).map((item: any) => (
        <div key={item.id}>
          id：{item.id}，name：{item.name}
        </div>
      ))}
    </>
  )
}

export default Child
