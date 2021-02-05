import base from '@carbonplan/theme'

export default {
  ...base,
  text: {
    label: {
      fontFamily: 'mono', 
      letterSpacing: 'mono',
      fontSize: [1], 
      textTransform: 'uppercase', 
      color: 'secondary',
      mt: ['3px'],
      userSelect: 'none'
    }
  },
  tags: {
    dac: 'purple',
    forests: 'green',
    mineralization: 'grey',
    biomass: 'yellow',
    ocean: 'teal',
    soil: 'orange',
    reforestation: 'green',
    biochar: 'yellow',
    burial: 'yellow',
    injection: 'grey',
    phytoplankton: 'green',
    ifm: 'green',
    agroforestry: 'green',
    concrete: 'grey',
    gravel: 'grey',
    wood: 'yellow'
  }
}
