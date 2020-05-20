import { Text } from 'theme-ui'

const Permanence = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        The Permanence of a project is the duration over which durable carbon storage can be
        reasonably assured.
      </Text>
      <Text>
        When a range is provided, we report the minimum. For projects with contractual commitments
        (e.g. for soil and forests), we consider the contract duration the duration of permanence,
        even if it is lower than the number based on the underlying biogeophysics. All times are
        reported relative to the most recent project documents.
      </Text>
    </>
  )
}

export default Permanence
