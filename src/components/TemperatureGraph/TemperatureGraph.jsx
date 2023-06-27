import { useTemperatureDataContext } from '../TemperatureDataContext/UseTemperatureData'
// import  TemperatureNovoChart  from './TemperatureNovoChart/TemperatureNovoChart'
// import TemperatureRecharts from './TemperatureRecharts/TemperatureRecharts'
import TemperatureChartjs from './TemperatureChartjs/TemperatureChartjs'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function TemperatureGraph () {
  const { temperatureData } = useTemperatureDataContext()

  if (!temperatureData) {
    return <>Loading...</>
  }

  return (
    <div style={{ gridRow: '1 / 4', position: 'relative' }}>
      {/* <TemperatureNovoChart temperatureData={temperatureData} /> */}
      {/* <TemperatureRecharts temperatureData={temperatureData} /> */}
      <TemperatureChartjs temperatureData={temperatureData} />
    </div>)
}
