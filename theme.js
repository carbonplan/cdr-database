export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  fonts: {
    body: 'relative-faux-book-pro',
    heading: 'relative-medium-pro',
    monospace: 'relative-mono-11-pitch-pro',
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
    text: '#1b1e23',
    background: '#ebebec',
    primary: 'rgb(53,53,53)',
    secondary: 'rgb(80,80,80)',
    muted: 'rgb(200,200,200)',
    brown: '#B7765F',
    yellow: '#CCC45E',
    green: '#5FA055',
    blue: '#7FABB5',
    grey: '#a9b4c4',
    purple: '#9D75BA',
    modes: {
      dark: {
        text: '#ebebec',
        background: '#1b1e23',
        primary: 'rgb(230,230,230)',
        secondary: 'rgb(224, 224, 224)',
        muted: '#52575a',
        brown: '#B7765F',
        yellow: '#CCC45E',
        green: '#5FA055',
        blue: '#7FABB5',
        grey: '#a9b4c4',
        purple: '#9D75BA',
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
        textAlign: 'right'
      },
      label: {
        fontFamily: 'monospace',
        fontSize: [1],
        mt: ['6px']
      }
    },
    link: {
      cursor: 'pointer'
    }
  },
  forms: {
    input: {
      fontSize: [0],
      pt: ['4px'],
      pb: ['6px'],
      fontFamily: 'monospace'
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
  sizes: {
    container: 1100,
    sidebar: 500,
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
      mr: [3],
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
    soil: 'brown',
    biomass: 'yellow',
    forests: 'green',
    ocean: 'blue',
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
