import { Text } from 'theme-ui'

const Cost = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>Project Cost is taken directly from public project offerings.</Text>
      <Text sx={{ mb: [2] }}>
        Costs are expressed per volume, so while the price itself is entirely set by the project,
        any uncertainty associated with volume extends to the cost. Because we separately validate
        volume, we do not provide additional validation of cost.
      </Text>
      <Text>Some costs have been modified for accounting consistency, where indicated.</Text>
    </>
  )
}

export default Cost
