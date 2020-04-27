import { Text } from 'theme-ui'

const Overall = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      Most metrics are currently based directly on information provided by projects. 
      We are actively developing methods for calibration
      based on independent data and models.
    </Text>
    <Text>
      Marks next to metrics indicate either that have confidence in the value
      (√), we are unable to confirm it (?), or we have reason to doubt it (x). 
      We additionally annotate metrics with notes on basic project facts and 
      comments explaining our current evaluation.
    </Text>
    </>
  )
}

export default Overall
