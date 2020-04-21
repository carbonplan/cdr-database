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
      We annotate metrics with explanation and context. For volume,
      negativity, and permanence, a √ indicates our confidence in the metric
      and an x indicates we have questions. Absence of a mark suggests that we
      need to do further work and/or require more information,
      and should not be read as a critque.
    </Text>
    </>
  )
}

export default Overall
