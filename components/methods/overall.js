import { Text } from 'theme-ui'

const Overall = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      Most metrics are currently based directly on information provided by projects.
      We are actively developing methods for calibrating these values based on independent data and
      models.
    </Text>
    <Text>
      We annotate metrics with their provenance. For volume,
      negativity, and permanence a √ indicates confidence in the metric 
      given project information, independent data and
      models, or both. Abscence of a √ suggests a need for additional data or validation.
    </Text>
    </>
  )
}

export default Overall
