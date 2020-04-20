import { Box, Heading, Text, Badge } from 'theme-ui'
import Overall from './overall'
import Volume from './volume'
import Cycle from './cycle'
import Negativity from './negativity'
import Cost from './cost'
import Permanence from './permanence'
import Additionality from './additionality'
import Access from './access'
import Feedback from './feedback'
import { useState } from 'react'
import { alpha } from '@theme-ui/color'

const contents = {
  'overall': <Overall></Overall>,
  'volume': <Volume></Volume>,
  'cycle': <Cycle></Cycle>,
  'negativity': <Negativity></Negativity>,
  'cost': <Cost></Cost>,
  'permanence': <Permanence></Permanence>,
  'additionality': <Additionality></Additionality>,
  'access': <Access></Access>,
  'feedback?': <Feedback></Feedback>
}

const About = () => {
  const [method, setMethod] = useState('overall')

  const toggleMethod = (e) => {
    setMethod(e.value)
  }

  const getStyle = (name) => {
    if (name == method) {
      return {
        borderColor: 'primary',
        color: 'primary',
        mr: [3]
      }
    } else {
      return {
        borderColor: alpha('primary', 0.2),
        color: alpha('primary', 0.2),
        mr: [3]
      }
    }
  }

  return (
    <Box
      sx={{
        height: 'calc(100vh - 406px)',
        borderStyle: 'solid', 
        borderColor: 'muted', 
        borderWidth: '0px', 
        borderTopWidth: '1px',
        p: [4]
      }}
    >
      <Heading sx={{ fontSize: [4], mb: [2] }}>
        methods
      </Heading>
      <Box sx={{ maxWidth: '370px', mb: [2] }}>
        {['overall', 'volume', 'cycle', 'negativity', 'cost', 'permanence', 'additionality', 'access', 'feedback?'].map((name) => 
          <Badge variant='primary' key={name} sx={getStyle(name)} onClick={() => setMethod(name)}>{name}</Badge>
        )}
      </Box>
      <Box sx={{ maxWidth: '410px', fontSize: [1] }}>
        {contents[method]}
      </Box>
    </Box>
  )
}

export default About
