/** @jsx jsx */
import _ from 'lodash'
import { jsx } from 'theme-ui'
import { Vega } from 'react-vega'
import { useThemeUI } from 'theme-ui'
import { useDispatch, useSelector } from 'react-redux'
import { config, signals } from './utils.js'

var vegaLite = require('vega-lite')

const Volume = (props) => {

  const { projects } = props
  const dispatch = useDispatch()
  const context = useThemeUI()
  const theme = context.theme

  var values = []
  let opacity
  for (var i = 0; i < projects.length; i++) {
    const visible = useSelector(state => state.visibility[projects[i].id])

    if (visible) {
      opacity = 1
    } else {
      opacity = 0.2
    }
    
    values.push(
      {
        volume: parseFloat(projects[i].metrics.filter(m => (m.name == 'volume'))[0].value),
        group: projects[i].tags[0],
        color: theme.colors[theme.tags[projects[i].tags[0]]],
        name: projects[i].name,
        id: projects[i].id,
        opacity: opacity
      }
    )
  }

  const spec = {
    data: { 
      name: 'values' 
    },
    mark: {
      type: 'circle', 
      size: 200,
      cursor: 'pointer'
    },
    selection: {
      brush: { type: "interval", zoom: false }
    },
    encoding: {
      y: { 
        field: 'group', 
        type: 'nominal',
        scale: { 'padding': 1.87 },
        axis: { title: 'CATEGORY', domain: false, labels: false, ticks: false }
      },
      x: {
        field: 'volume',
        type: 'quantitative',
        axis: { title: 'VOLUME tCO2', tickCount: 3 },
        scale: { type: 'log', domain: [2, 100000000], nice: false }   
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
      opacity: {
        field: 'opacity',
        type: 'quantitative',
        scale: null
      }
    },
  }

  var vgSpec = vegaLite.compile(spec, { config: config(theme) }).spec;

  vgSpec.signals.push(...signals)

  const width = 335
  const height = 175

  function handleClickOn(...args) {
    dispatch({ type: 'SET_ACTIVE', value: args[1].datum.id })
  }

  function handleClickOr(...args) {
    dispatch({ type: 'TOGGLE_ACTIVE', value: args[1].datum.id })
  }

  function handleClickOff(...args) {
    dispatch({ type: 'CLICK_OFF', value: '' })
  }

  function handleBrush(...args) {
    if (Object.keys(args[1]).length == 0) {
      handleClickOff(args)
      return
    } else {
      const x = args[1].volume
      const y = args[1].group

      var selected = []
      for (var i = 0; i < projects.length; i++) {
        const row = values[i]

        if ((y.includes(row.group)) && ((row.volume > x[0]) && (row.volume < x[1]))) {
          selected.push(row.id)
        }
      }
      dispatch({ type: 'SET_ACTIVE_LIST', value: selected })
    }
  }

  const signalListeners = {
    clickOn: handleClickOn,
    clickOr: handleClickOr,
    clickOff: handleClickOff,
    brush: handleBrush
  }

  return <Vega width={width} height={height} signalListeners={signalListeners}
    data={{ values: values }} renderer={'svg'} actions={false} spec={vgSpec} />

}

export default Volume
