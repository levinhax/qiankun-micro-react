import React, { useEffect, useRef } from 'react'
import { IProps } from './type'
import * as echarts from 'echarts'

const LineChart: React.FC<IProps> = props => {
  console.log('props: ', props)
  const chartRef: any = useRef() //拿到DOM容器

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    const chart = echarts.init(chartRef.current) //echart初始化容器
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
          data: [22, 19, 88, 66, 5, 90],
          type: 'line',
        },
      ],
    }

    chart.setOption(option)
  }, [])

  return <div ref={chartRef} className="chart"></div>
}

export default LineChart
