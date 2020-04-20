import { Text } from 'theme-ui'
import Cycle from '../graphics/cycle'

const data = {
  stock: {
    geological: null,
    land: null,
    ocean: null,
    material: null
  },
  flux: []
}

const Volume = () => {
  return (
    <>
      <Text>
        Volume is the overall amount of carbon removal and/or avoided emissions. 
        Diagrams enhanced removal (colored lines), avoided emissions (crossed out colored lines),
        and new carbon stores (colored circles).
      </Text>
      <Cycle data={data}></Cycle>
    </>
  )
}

export default Volume
