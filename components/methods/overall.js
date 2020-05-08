import { Text } from 'theme-ui'

const Overall = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      Metrics are based on information provided in public project offerings plus our own research. 
      We are actively developing methods for calibration
      based on independent data and models.
    </Text>
    <Text>
      Marks next to metrics indicate that we have either independently validated the claims
      (√), we have reason to doubt the claims (x), or we are uncertain (?). A (?) should not
      be taken as a critism, rather a lack of information.
      We additionally include notes on projects and 
      comments explaining our evaluation.
    </Text>
    </>
  )
}

export default Overall
