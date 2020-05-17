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
      A <Check closed={true}/> means we have independently 
      validated the claim and an <Ex closed={true}/> means we have reason to doubt the claim. 
      In all other cases we remain uncertain, so we leave the entry blank.
      We additionally include notes on projects and 
      comments explaining our evaluation.
    </Text>
    </>
  )
}

export default Overall
