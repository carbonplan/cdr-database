/** @jsx jsx */
import _ from 'lodash'
import { jsx } from 'theme-ui'
import { Vega } from 'react-vega'
import { useThemeUI } from 'theme-ui'
import { useDispatch, useSelector } from 'react-redux'
import clickSignals from './utils.js'

var vegaLite = require('vega-lite')


const Negativity = (props) => {

  const { projects } = props
  const dispatch = useDispatch()
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
  let fillOpacity
  for (var i = 0; i < projects.length; i++) {
    const visible = useSelector(state => state.visibility[projects[i].project_id])

    if (visible) {
      fillOpacity = 1
    } else {
      fillOpacity = 0.4
    }
    
    values.push(
      {
        negativity: parseFloat(projects[i].metrics.filter(m => (m.name == 'Net negativity ratio'))[0].value),
        group: projects[i].tags[0],
        color: theme.colors[theme.tags[projects[i].tags[0]]],
        name: projects[i].name,
        fillOpacity: fillOpacity
      }
    )
  }

  const spec = {
    data: { name: 'values' },
    mark: {
      type: 'circle', size: 100,
    },
    encoding: {
      y: { field: "group", type: "nominal" },
      x: {
        field: "negativity", type: "quantitative", axis: { title: 'Net Negativity Ratio' },
        scale: { type: 'linear' },
      },
      color: {
        field: 'color',
        type: 'ordinal',
        scale: null
      },
      stroke: {
        field: 'color',
        type: 'nominal',
        scale: null,
      },
      fillOpacity: {
        field: 'fillOpacity',
        type: 'quantitative',
        scale: null
      },
      tooltip: [
        { field: "name", type: "ordinal" },
        { field: "negativity", type: "quantitative" },
      ]
    },
  }

  var vgSpec = vegaLite.compile(spec, { config: config }).spec;

  vgSpec.signals.push(...clickSignals)

  const width = 300
  const height = 200

  function handleClickOn(...args) {
    console.log('handleClickOn', args);
    dispatch({ type: 'UPDATE_SEARCH', value: args[1].datum.name })
  }

  function handleClickOff(...args) {
    console.log('handleClickOff', args);
    dispatch({ type: 'UPDATE_SEARCH', value: '' })
  }

  const signalListeners = {
    clickOn: handleClickOn,
    clickOff: handleClickOff
  }

  return <Vega width={width} height={height} signalListeners={signalListeners}
    data={{ values: values }} actions={false} spec={vgSpec} />

}

export default Negativity
