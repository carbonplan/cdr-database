import { useState } from 'react'
import { Grid } from 'theme-ui'
import TooltipToggle from '../tooltip/toggle'
import TooltipDescription from '../tooltip/description'

const Field = ({ label, children, tooltips }) => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Grid columns={['100px 1fr 18px']}>
        {children}
        <TooltipToggle tooltips={tooltips} value={value} setValue={setValue} />
      </Grid>
      <TooltipDescription label={label} value={value} tooltips={tooltips} />
    </>
  )
}

export default Field
