import { Text } from 'theme-ui'

const Cost = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        Project Cost is taken directly from public projet offerings.
        Some costs have been modified for accounting
        consistency.
      </Text>
      <Text sx={{ mb: [2] }}>
        Costs are expressed per volume, so while the price itself is entirely 
        set by the project and is thus arbitrary, any uncertainty associated 
        with volume extends to the cost. Because we separately evaluate volume, 
        we do not provide additional evaluation of project cost.
      </Text>
    </>
  )
}

export default Cost
