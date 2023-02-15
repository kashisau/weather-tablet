import { LineChart, Line } from 'recharts'

export default function TemperatureRecharts({ temperatureData }) {
    if (!temperatureData) return <div>loading temperature graph</div>

    console.log("Temperature data: ", temperatureData)
    return (<LineChart width={400} height={400} data={temperatureData[0].data}>
    <Line type="monotone" dataKey="x" values='y' stroke="#8884d8" />
  </LineChart>)
}