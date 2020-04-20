import { Text } from 'theme-ui'
import CycleDiagram from '../graphics/cycle'

const data = {
  stock: {
    geological: null,
    land: null,
    ocean: null,
    material: null
  },
  flux: []
}

const Cycle = () => {
  return (
    <>
      <Text sx={{ mb: [3] }}>
        Alongside the VOLUME we use a simplified carbon cycle 
        to differentiate enhanced removal (colored lines), avoided emissions (colored
        crossed out lines), or increases in land, ocean, geological, or material storage (filled circles).
        Inspired by Smith et al. 2015.
      </Text>
      <CycleDiagram data={data} labels={true}></CycleDiagram>
    </>
  )
}

export default Cycle
