import { Text } from 'theme-ui'

const Negativity = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        We define NEGATIVITY as one minus the ratio of gross project emissions to gross carbon removal. 
        If emissions are high relative to the amount of carbon removal, this value will approach 0.
      </Text>
      <Text sx={{ mb: [2] }}>
        Estimating negativity requires a life cycle assessment to quantify emissions sources. 
        This can be an abstract 'per ton' estimate based on parameters
        of the technology, or derived from an instantiated project.
      </Text>
    </>
  )
}

export default Negativity
