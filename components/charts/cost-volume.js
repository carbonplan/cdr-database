/** @jsx jsx */
import _ from 'lodash'
import { jsx } from 'theme-ui'
import { Component } from 'react'
import { VegaLite } from 'react-vega'
import React from 'react'
import { useThemeUI } from 'theme-ui'

const CostVolume = (props) => {

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
        cost: parseFloat(projects[i].metrics.filter(m => (m.name == 'Cost today'))[0].value),
        volume: parseFloat(projects[i].metrics.filter(m => (m.name == 'Total project volume'))[0].value),
        color: theme.colors[theme.tags[projects[i].tags[0]]],
        name: projects[i].name,
      }
      )
    }

    const spec = {
      data: { name: 'values' },
      mark: {
        type: 'circle',
      },
      encoding: {
        x: {
          field: 'volume',
          type: 'quantitative',
          axis: { title: 'Total volume (tCO2)' },
          scale: { type: 'log' },
        },
        y: {
          field: 'cost',
          type: 'quantitative',
          axis: { title: 'Cost today ($/tCO2)' },
          scale: { type: 'log' },
        },
        color: {
          field: 'color',
          type: 'nominal'
        },
        tooltip: [
          { field: "name", type: "ordinal" },
          { field: "volume", type: "quantitative" },
          { field: "cost", type: "quantitative" },
        ]
      }
    }

    const width = 300
    const height = 125

    return <VegaLite config={config} width={width} height={height}
    data={{ values: values }} actions={false} spec={spec} />

  }

  export default CostVolume
