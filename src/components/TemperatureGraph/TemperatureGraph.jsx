// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
      "id": "japan",
      "color": "hsl(316, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 54
        },
        {
          "x": "helicopter",
          "y": 266
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
    },
    {
      "id": "france",
      "color": "hsl(299, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 109
        },
        {
          "x": "helicopter",
          "y": 120
        },
        {
          "x": "boat",
          "y": 293
        },
        {
          "x": "train",
          "y": 127
        },
        {
          "x": "subway",
          "y": 128
        },
        {
          "x": "bus",
          "y": 247
        },
        {
          "x": "car",
          "y": 12
        },
        {
          "x": "moto",
          "y": 298
        },
        {
          "x": "bicycle",
          "y": 99
        },
        {
          "x": "horse",
          "y": 144
        },
        {
          "x": "skateboard",
          "y": 275
        },
        {
          "x": "others",
          "y": 182
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(134, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 47
        },
        {
          "x": "helicopter",
          "y": 176
        },
        {
          "x": "boat",
          "y": 110
        },
        {
          "x": "train",
          "y": 165
        },
        {
          "x": "subway",
          "y": 223
        },
        {
          "x": "bus",
          "y": 155
        },
        {
          "x": "car",
          "y": 233
        },
        {
          "x": "moto",
          "y": 83
        },
        {
          "x": "bicycle",
          "y": 181
        },
        {
          "x": "horse",
          "y": 19
        },
        {
          "x": "skateboard",
          "y": 223
        },
        {
          "x": "others",
          "y": 227
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(311, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 154
        },
        {
          "x": "helicopter",
          "y": 177
        },
        {
          "x": "boat",
          "y": 6
        },
        {
          "x": "train",
          "y": 172
        },
        {
          "x": "subway",
          "y": 36
        },
        {
          "x": "bus",
          "y": 25
        },
        {
          "x": "car",
          "y": 18
        },
        {
          "x": "moto",
          "y": 145
        },
        {
          "x": "bicycle",
          "y": 270
        },
        {
          "x": "horse",
          "y": 51
        },
        {
          "x": "skateboard",
          "y": 163
        },
        {
          "x": "others",
          "y": 39
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(14, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 44
        },
        {
          "x": "helicopter",
          "y": 62
        },
        {
          "x": "boat",
          "y": 212
        },
        {
          "x": "train",
          "y": 136
        },
        {
          "x": "subway",
          "y": 291
        },
        {
          "x": "bus",
          "y": 74
        },
        {
          "x": "car",
          "y": 183
        },
        {
          "x": "moto",
          "y": 190
        },
        {
          "x": "bicycle",
          "y": 269
        },
        {
          "x": "horse",
          "y": 263
        },
        {
          "x": "skateboard",
          "y": 98
        },
        {
          "x": "others",
          "y": 296
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
    return (<ResponsiveLine
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
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />)
    }