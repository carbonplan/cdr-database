/** @jsx jsx */
import _ from 'lodash'
import { jsx } from 'theme-ui'
import { Component } from 'react'
import { VegaLite } from 'react-vega'
import React from 'react'
import { useThemeUI } from 'theme-ui'

const Lca = (props) => {

  const { projects } = props
  const context = useThemeUI()
  const theme = context.theme

  const config = {
    background: theme.colors.background,
    padding: { left: 75, right: 0, top: 30, bottom: 50 },
    axis: {
      grid: false,
      labelFontSize: theme.fontSizes[1],
      labelFont: theme.fonts.body,
      labelColor: theme.colors.text,
      titleFont: theme.fonts.heading,
      titleFontSize: theme.fontSizes[1],
      titleColor: theme.colors.text,
      domain: false,
      tickOffset: -3.7
    },
    view: {
      stroke: 'none'
    },
    line: {
      strokeWidth: 5,
      color: theme.colors.text
    },
    autosize: {
      type: 'none'
    }
  }

  var values = []
  for (var i = 0; i < projects.length; i++) {
    values.push(
      {
        negativity: parseFloat(projects[i].metrics.filter(m => (m.name == 'Neg negativity ratio'))[0].value),
        group: projects[i].tags[0],
        color: theme.colors[theme.tags[projects[i].tags[0]]],
        name: projects[i].name,
      }
    )
  }

  // const spec = {
  //   data: { name: 'values' },
  //   mark: {
  //     type: 'bar',
  //   },
  //   encoding: {
  //     y: { field: "group", type: "nominal" },
  //     x: {
  //       field: "min_dur", type: "quantitative", axis: { title: 'Lca (years)' },
  //       scale: { type: 'log' },},
  //     x2: { field: "max_dur" },
  //     color: {
  //       field: 'color',
  //       type: 'nominal'
  //     },
  //   },
  //   transform: [
  //     {
  //       aggregate: [
  //         { op: "min", field: "negativity", as: "min_dur" },
  //         { op: "max", field: "negativity", as: "max_dur" },
  //       ],
  //       groupby: ["group"]
  //     }
  //   ],
  // }
  const spec = {
    data: { name: 'values' },
    mark: {
      type: 'circle', "tooltip": true, size: 100
    },
    encoding: {
      y: { field: "group", type: "nominal" },
      x: {
        field: "negativity", type: "quantitative", axis: { title: 'Net Negativity Ratio' },
        scale: { type: 'linear' },
      },
      color: {
        field: 'color',
        type: 'nominal'
      },
      tooltip: [
        { field: "name", type: "ordinal" },
        { field: "negativity", type: "quantitative" },
      ]
    },
  }

  const width = 300
  const height = 125

  return <VegaLite config={config} width={width} height={height}
    data={{ values: values }} actions={false} spec={spec} />

}

export default Lca
