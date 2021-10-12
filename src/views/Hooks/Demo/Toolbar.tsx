import React from 'react'
import ThemedButton from './ThemedButton'

const Toolbar = (props: any) => {
  console.log('Toolbar props: ', props)
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

export default Toolbar
