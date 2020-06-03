import { Text } from 'theme-ui'

const Volume = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        Volume is our best estimate of the current carbon removal and/or avoided
        emissions of the project in metric tCO<sub>2</sub>. Volumes are based on
        public project offerings and reflect project lifetimes, some of which
        are one year, some longer. We are working on better models to calibrate
        these estimates.
      </Text>
      <Text>
        Note that a project with large Volume but low Negativity would not be an
        effective form of carbon removal due to the large emissions, so these
        metrics should be considered together.
      </Text>
    </>
  )
}

export default Volume
