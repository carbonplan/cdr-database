import { Box, Heading, Text, Badge, Link } from 'theme-ui'
import Overall from './methods/overall'
import Volume from './methods/volume'
import Mechanism from './methods/mechanism'
import Negativity from './methods/negativity'
import Cost from './methods/cost'
import Permanence from './methods/permanence'
import Additionality from './methods/additionality'
import Specificity from './methods/specificity'
import Feedback from './methods/feedback'
import { useState } from 'react'
import { alpha } from '@theme-ui/color'
import { useThemeUI } from 'theme-ui'
import { default as NextLink } from 'next/link'

const contents = {
  overall: <Overall></Overall>,
  volume: <Volume></Volume>,
  mechanism: <Mechanism></Mechanism>,
  negativity: <Negativity></Negativity>,
  cost: <Cost></Cost>,
  permanence: <Permanence></Permanence>,
  additionality: <Additionality></Additionality>,
  specificity: <Specificity></Specificity>,
  'feedback?': <Feedback></Feedback>,
}

const Methods = () => {
  const [method, setMethod] = useState('overall')

  const toggleMethod = (e) => {
    setMethod(e.value)
  }

  const getStyle = (name) => {
    if (name == method) {
      return {
        borderColor: 'primary',
        color: 'primary',
        mr: [3],
        mb: [1],
      }
    } else {
      return {
        borderColor: alpha('primary', 0.2),
        color: alpha('primary', 0.2),
        mr: [3],
        mb: [1],
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
        pl: [4],
        pt: [3],
      }}
    >
      <Heading sx={{ fontSize: [4], mt: [1], mb: [2] }}>Methods</Heading>
      <Box sx={{ maxWidth: '450px', mb: [2] }}>
        {[
          'overall',
          'mechanism',
          'volume',
          'negativity',
          'cost',
          'permanence',
          'additionality',
          'specificity',
          'feedback?',
        ].map((name) => (
          <Badge
            variant='primary'
            key={name}
            sx={getStyle(name)}
            onClick={() => setMethod(name)}
          >
            {name}
          </Badge>
        ))}
      </Box>
      <Box sx={{ maxWidth: '420px', fontSize: [1] }}>{contents[method]}</Box>
      <Heading sx={{ fontSize: [2], mt: [3] }}>
        <Text sx={{ width: 'fit-content' }}>
          <NextLink href='/reports/methods'>
            <a>
              <Text
                sx={{
                  color: 'text',
                  '&:hover > #arrow': {
                    color: 'secondary',
                  },
                  '&:hover': {
                    color: 'secondary',
                  },
                }}
              >
                READ MORE
                <Text id='arrow' variant='arrow'>
                  ↗
                </Text>
              </Text>
            </a>
          </NextLink>
        </Text>
      </Heading>
    </Box>
  )
}

export default Methods
