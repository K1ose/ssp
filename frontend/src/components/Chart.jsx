import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    chart.setOption({
      title: { text: 'ECharts Example' },
      tooltip: {},
      xAxis: { data: ['A', 'B', 'C', 'D'] },
      yAxis: {},
      series: [{ type: 'bar', data: [10, 20, 30, 40] }],
    });
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Chart;
