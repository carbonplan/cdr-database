/** @jsx jsx */
import _ from 'lodash'
import { jsx } from 'theme-ui'
import { Vega } from 'react-vega'
import { useThemeUI } from 'theme-ui'
import { useDispatch, useSelector } from 'react-redux'
import { config, signals } from './utils.js'

var vegaLite = require('vega-lite')


const Negativity = (props) => {

  const { projects } = props
  const dispatch = useDispatch()
  const context = useThemeUI()
  const theme = context.theme

  var values = []
  let fillOpacity, strokeOpacity
  for (var i = 0; i < projects.length; i++) {
    const visible = useSelector(state => state.visibility[projects[i].project_id])

    if (visible) {
      fillOpacity = 0.7
      strokeOpacity = 1
    } else {
      fillOpacity = 0.1,
      strokeOpacity = 0.2
    }
    
    values.push(
      {
        negativity: parseFloat(projects[i].metrics.filter(m => (m.name == 'Net negativity ratio'))[0].value),
        group: projects[i].tags[0],
        color: theme.colors[theme.tags[projects[i].tags[0]]],
        name: projects[i].name,
        fillOpacity: fillOpacity,
        strokeOpacity: strokeOpacity
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
    encoding: {
      y: { 
        field: 'group', 
        type: 'nominal',
        scale: { 'padding': 2 }
      },
      x: {
        field: 'negativity', 
        type: 'quantitative', 
        axis: { title: 'Net Negativity Ratio', tickCount: 2 },
        scale: { type: 'linear', domain: [-0.1, 1.1], nice: false },
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
      strokeOpacity: {
        field: 'strokeOpacity',
        type: 'quantitative',
        scale: null
      },
      fillOpacity: {
        field: 'fillOpacity',
        type: 'quantitative',
        scale: null
      }
    },
  }

  var vgSpec = vegaLite.compile(spec, { config: config(theme) }).spec;

  vgSpec.signals.push(...signals)

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
    data={{ values: values }} renderer={'svg'} actions={false} spec={vgSpec} />

}

export default Negativity
