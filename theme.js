export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.45,
    heading: 1.125,
  },
  colors: {
    text: 'rgb(10,10,10)',
    background: 'rgb(245,245,245)',
    primary: 'rgb(53,53,53)',
    secondary: 'rgb(80,80,80)',
    muted: 'rgb(200,200,200)',
    modes: {
      dark: {
        text: 'rgb(255,255,255)',
        background: 'rgb(28,29,33)',
        primary: 'rgb(230,230,230)',
        secondary: 'rgb(224, 224, 224)',
        muted: 'rgb(51,53,59)',
        // tag colors
        mineralization: '#A7B7B7',
        soil: '#B7765F',
        biomass: '#CCC45E',
        forests: '#5FA055',
        ocean: '#7FABB5',
        dac: '#9D75BA',
      }
    }
  },
  text: {
    link: {
      cursor: 'pointer'
    }
  },
  sizes: {
    container: 1600,
    sidebar: 256,
    main: 320
  },
  badges: {
    primary: {
      cursor: 'pointer', 
      color: 'primary',
      borderStyle: 'solid',
      borderColor: 'primary',
      borderWidth: '1px',
      bg: 'background',
      mr: [2],
      mb: [2],
      pl: [1],
      pr: [1],
      fontSize: [2],
      fontWeight: 'bold'
    },
    selected: {
      cursor: 'pointer', 
      color: 'background',
      borderStyle: 'solid',
      borderColor: 'primary',
      borderWidth: '1px',
      bg: 'primary',
      mr: [2],
      mb: [2],
      pl: [1],
      pr: [1],
      fontSize: [2],
      fontWeight: 'bold'
    }
  },
  links: {
    nav: {
      color: "primary",
      "&.active": {
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
    }
  }
}
