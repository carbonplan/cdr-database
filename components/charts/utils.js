export const config = (theme) => {
  return {
    background: null,
    cursor: 'pointer',
    padding: { left: 75, right: 0, top: 30, bottom: 50 },
    axis: {
      grid: false,
      labelFontSize: theme.fontSizes[1],
      labelFont: theme.fonts.monospace,
      labelColor: theme.colors.text,
      titleFont: theme.fonts.monospace,
      titleFontSize: theme.fontSizes[1],
      titleColor: theme.colors.text,
      domain: true,
      tickOffset: 0,
      labelPadding: 5,
      titlePadding: 10
    },
    view: {
      stroke: 'none'
    },
    line: {
      strokeWidth: 5,
      color: theme.colors.text
    },
    autosize: 'none'
  }
}

export const signals = [
  {
    'name': 'clickOn',
    'on': [
      {
        'events': 'symbol:mousedown![!event.shiftKey]',
        'update': 'item()'
      }
    ]
  },
  {
    'name': 'clickOr',
    'on': [
      {
        'events': 'symbol:mousedown![event.shiftKey]',
        'update': 'item()'
      }
    ]
  },
  {
    'name': 'clickOff',
    'on': [
      {
        'events': '.vega-embed:mousedown',
        'update': '{}'
      }
    ]
  }
]