export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  fonts: {
    body: 'relative-faux-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    heading: 'relative-medium-pro, system-ui, -apple-system, BlinkMacSystemFont',
    monospace: 'relative-mono-11-pitch-pro, Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 400,
  },
  lineHeights: {
    body: 1.45,
    heading: 1.125,
  },
  colors: {
    text: '#ebebeb',
    background: '#1b1e23',
    primary: '#e3e4e5',
    secondary: '#818284',
    muted: '#363a3e',
    red: '#f07071',
    orange: '#ea9755',
    yellow: '#d4c05e',
    green: '#7eb36a',
    teal: '#64b9c4',
    blue: '#85a2f7',
    purple: '#bc85d9',
    pink: '#e587b6',
    grey: '#a9b4c4',
    modes: {
      light: {
        text: '#1b1e23',
        background: '#ebebec',
        primary: 'rgb(53,53,53)',
        secondary: 'rgb(80,80,80)',
        muted: 'rgb(200,200,200)',
        red: '#f07071',
        orange: '#ea9755',
        yellow: '#d4c05e',
        green: '#7eb36a',
        teal: '#64b9c4',
        blue: '#85a2f7',
        purple: '#bc85d9',
        pink: '#e587b6',
        grey: '#a9b4c4'
      }
    }
  },
  text: {
    description: {
      fontSize: [2],
      marginBlockStart: '0.3em',
      mb: [1]
    },
    metric: {
      value: {
        fontFamily: 'monospace',
        fontSize: [3],
        textAlign: 'right',
        mt: ['2px']
      },
      label: {
        fontFamily: 'monospace',
        fontSize: [2],
        mt: ['6px']
      },
      units: {
        fontFamily: 'monospace',
        color: 'secondary',
        fontSize: [1],
        ml: [2]
      }
    },
    link: {
      cursor: 'pointer'
    }
  },
  forms: {
    input: {
      fontSize: [2],
      pt: ['4px'],
      pb: ['6px'],
      pl: [0],
      pr: [0],
      fontFamily: 'monospace',
      borderRadius: '0px',
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px',
      borderBottomWidth: '1px',
      textAlign: 'right'
    },
    select: {
      cursor: 'pointer',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      p: [1],
      pl: [0],
      width: '200px',
      mt: [3],
      color: 'text',
      bg: 'background',
      border: 'none',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'text',
      borderRadius: '0px',
      fontFamily: 'monospace',
      fontSize: [1]
    },
    radio: {
      cursor: 'pointer'
    },
    label: {
      cursor: 'pointer'
    }
  },
  layout: {
    container: {
      maxWidth: '1150px',
      '@media only screen and (min-width: 100em)': {
        maxWidth: '1500px',
      }
    }
  },
  sizes: {
    sidebar: 475,
    chart: 400,
    main: 320
  },
  badges: {
    primary: {
      cursor: 'pointer', 
      color: 'primary',
      borderStyle: 'solid',
      borderColor: 'primary',
      borderWidth: '0px',
      borderBottomWidth: '2px',
      bg: 'background',
      borderRadius: '0px',
      textTransform: 'uppercase',
      mb: [2],
      pt: ['1px'],
      pb: ['2px'],
      pl: [0],
      pr: [0],
      fontSize: [1],
      fontWeight: 'body',
      fontFamily: 'monospace'
    }
  },
  links: {
    nav: {
      color: "primary",
      "&:active": {
        color: "primary",
      },
      "&:hover": {
        color: "background",
        backgroundColor: "primary"
      },
      fontFamily: 'heading',
      borderRadius: [2],
      textDecoration: "none",
      fontSize: [2],
      fontWeight: "bold",
      cursor: "pointer",
      p: [2],
      pb: [1]
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: "text",
      "&:active": {
        color: "text",
      },
      "&:hover": {
        color: "muted",
        borderBottom: 'solid',
        borderWidth: [2]
      },
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer"
    },
    hr: {
      border: 'none',
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted'
    }
  },
  tags: {
    mineralization: 'grey',
    soil: 'orange',
    biomass: 'yellow',
    forests: 'green',
    ocean: 'teal',
    dac: 'purple',
    biochar: 'yellow',
    'building materials': 'yellow',
    broker: 'grey',
    beccs: 'yellow',
    reforestation: 'green',
    'avoided conversion': 'green',
    agroforestry: 'green',
    burial: 'yellow'
  }
}
