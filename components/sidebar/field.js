import { useState } from 'react'
import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import TooltipToggle from '../tooltip/toggle'
import TooltipDescription from '../tooltip/description'
import sx from '../styles'

const Field = ({ label, displayLabel, children, tooltips }) => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Row columns={[6, 8, 4, 4]} sx={{ mt: [1, 1, 1, 2] }}>
        <Column start={[1, 1, 1, 1]} width={[2, 1, 1, 1]}>
          <Box sx={sx.label}>{displayLabel}</Box>
        </Column>
        <Column start={[3, 3, 2, 2]} width={[4, 4, 3, 3]}>
          <Box sx={{ display: 'inline-block', float: 'right' }}>
            <TooltipToggle
              tooltips={tooltips}
              value={value}
              setValue={setValue}
            />
          </Box>
          {children}
          <Box sx={{ mt: [1] }}>
            <TooltipDescription
              label={label}
              value={value}
              tooltips={tooltips}
            />
          </Box>
        </Column>
      </Row>
    </>
  )
}

export default Field
