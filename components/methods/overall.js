import { Text } from 'theme-ui'
import Check from '../icons/check'
import Question from '../icons/question'
import Ex from '../icons/ex'

const Overall = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      Metrics are based on information provided in public project proposals plus our own research. 
      We are actively developing methods for calibration
      based on independent data and models.
    </Text>
    <Text>
      The mark next to each metric shows our validation. 
      A <Check closed={true}/> means we could validate a claim with reasonable confidence.
      We leave entries blank where we didn't feel confident validating claims.
      "Notes" for each metric describe project information directly 
      and "Comments" explain our evaluation or interpretation.
    </Text>
    </>
  )
}

export default Overall
