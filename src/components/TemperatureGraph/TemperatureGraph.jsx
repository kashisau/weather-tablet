// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
      "id": "forecastTemp",
      "color": "hsl(316, 70%, 50%)",
      "data": [
        {
          "x": "12 Midnight",
          "y": 26.4
        },
        {
          "x": "1:00 AM",
          "y": 27.1
        },
        {
          "x": "boat",
          "y": 166
        },
        {
          "x": "train",
          "y": 204
        },
        {
          "x": "subway",
          "y": 292
        },
        {
          "x": "bus",
          "y": 46
        },
        {
          "x": "car",
          "y": 91
        },
        {
          "x": "moto",
          "y": 108
        },
        {
          "x": "bicycle",
          "y": 98
        },
        {
          "x": "horse",
          "y": 204
        },
        {
          "x": "skateboard",
          "y": 268
        },
        {
          "x": "others",
          "y": 179
        }
      ]
    }
  ]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function TemperatureGraph() {
    return (
      <div style={{"grid-row": "1 / 3"}}>
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Temperature',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    /></div>)
    }