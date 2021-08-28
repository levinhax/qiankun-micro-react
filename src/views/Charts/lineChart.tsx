import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import './index.css'

function LineChartView() {
  const chartRef: any = useRef()

  useEffect(() => {
    const chart = echarts.init(chartRef.current) // echarts初始化容器
    let option = {
      //配置项(数据都来自于props)
      title: {
        text: '暂无数据',
      },
      xAxis: {
        type: 'category',
        data: ['2021/08/20', '2021/08/21', '2021/08/22', '2021/08/23', '2021/08/24', '2021/08/25'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [22, 19, 88, 66, 15, 90],
          type: 'line',
        },
      ],
    }

    chart.setOption(option)
  }, [])

  return (
    <div className="line-chart-wrapper">
      <h2>LineChart</h2>
      <div style={{ width: 360, height: 200 }}>
        <div ref={chartRef} className="chart"></div>
      </div>
    </div>
  )
}

export default LineChartView
