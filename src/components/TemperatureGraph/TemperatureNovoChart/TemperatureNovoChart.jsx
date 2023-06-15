/* eslint-disable react/prop-types */
'use client'

import { ResponsiveLine } from '@nivo/line'

export default function TemperatureNovoChart ({ temperatureData }) {
  console.log('Temperature data: ', temperatureData)
  return (<ResponsiveLine
        data={temperatureData}
        margin={{ top: 50, right: 110, bottom: 50, left: 100 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 40,
          stacked: false,
          reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: 'middle',
          format: value => value % 10 !== 0 || value < 10 || value > 30 ? '' : `${value}°C`
        }}
        lineWidth={7}
        enableGridX={false}
        gridYValues={[0, 5, 10, 15, 20, 25, 30, 35]}
        theme={{
          fontSize: 24,
          fontFamily: 'Outfit',
          textColor: 'white',
          grid: {
            line: {
              stroke: 'rgba(199,209,217,25)'
            }
          }
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        isInteractive={true}
        useMesh={true}
        legends={[]}
        // layers={['grid', 'markers', 'areas', DashedLine, 'slices', 'points', 'axes', 'legends']}
    />)
}
