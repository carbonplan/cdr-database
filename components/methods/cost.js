import { Text } from 'theme-ui'

const Cost = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        Project Cost is taken directly from public project offerings.
      </Text>
      <Text sx={{ mb: [2] }}>
        Costs are expressed per volume and thus reflect project lifetimes, 
        some of which are one year, some longer.
        Because we separately validate volume, 
        we do not provide additional validation of cost, as it is otherwise
        set entirely by projects.
      </Text>
      <Text>
        Some costs have been modified for accounting
        consistency, where indicated.
      </Text>
    </>
  )
}

export default Cost
