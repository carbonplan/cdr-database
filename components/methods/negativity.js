import { Text } from 'theme-ui'

const Negativity = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        We define Negativity as 1 minus the ratio of gross project emissions to
        gross climate benefits, including carbon removal and storage. If
        emissions are low relative to the climate benefits, this metric will
        approach 1.
      </Text>
      <Text sx={{ mb: [2] }}>
        Estimating negativity requires a life cycle assessment to quantify
        emissions sources and sinks. This can be an abstract 'per ton' estimate
        based on parameters of the technology, or derived from an instantiated
        project.
      </Text>
    </>
  )
}

export default Negativity
