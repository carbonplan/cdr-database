import { Text } from 'theme-ui'

const Volume = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        Volume is our best estimate of the current carbon removal and/or avoided emissions
        of the project. In all cases volume is based on a public project offering. 
        We are working on calibrating these estimates with 
        domain-specific models.
      </Text>
      <Text>
        Note that a project with large Volume but low Negativity
        would not be an effective form of carbon removal
        due to the large emissions, so these metrics
        should be considered together.
      </Text>
    </>
  )
}

export default Volume
