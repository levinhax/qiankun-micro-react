import React, { FC } from 'react'
import { Button } from 'antd'
import './index.css'
import { connect } from 'react-redux'
import { ReducersStateMap } from '../../store/reducers'
import { addAction, decrementAction, cancelAddAsyncAction, addAsyncAction } from '../../store/actions/counter'

type MapStateToPropsMap = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsMap = ReturnType<typeof mapDispatchToProps>
type CounterProps = MapStateToPropsMap & MapDispatchToPropsMap

// function About() {
//   return (
//     <div className="about-wrapper">
//       <h2>About</h2>
//     </div>
//   )
// }

// export default About

const About: FC<CounterProps> = ({ counter, countdown, onAddAsync, onCancelAsync, onAdd, onDecrement }) => {
  return (
    <div className="about-wrapper">
      <h2>About</h2>
      <div className="counter-content">
        <p>Clicked: {counter}</p>
        <div>
          <Button type="primary" onClick={onAdd}>
            增加
          </Button>
          <Button type="ghost" style={{ marginLeft: 20 }} onClick={onDecrement}>
            减少
          </Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <Button onClick={countdown ? onCancelAsync : onAddAsync} style={{ color: countdown ? 'red' : '#000' }}>
            {countdown ? `Cancel increment (${countdown})` : 'increment after 5s'}
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: ReducersStateMap) => ({
  counter: state?.CounterReducer?.counter,
  countdown: state?.CounterReducer?.countdown,
})

const mapDispatchToProps = (dispatch: any) => ({
  onAdd: () => dispatch(addAction()),
  onDecrement: () => dispatch(decrementAction()),
  onCancelAsync: () => dispatch(cancelAddAsyncAction()),
  onAddAsync: () => dispatch(addAsyncAction(5)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
