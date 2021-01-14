import { memo, useState } from 'react'
import { Box, Text, Grid } from 'theme-ui'
import theme from '../../../theme'

const Report = ({ id, name, description, tags, metrics, setHighlighted }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Box
      onClick={() => {
        setExpanded(!expanded)
      }}
      onMouseEnter={() => {
        setHighlighted(id)
      }}
      onMouseLeave={() => {
        setHighlighted(null)
      }}
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '1px',
        borderRadius: '6px',
        cursor: 'pointer',
        pl: [3],
        pr: [2],
        pt: [2],
        pb: [3],
        my: [3],
        transition: 'border-color 0.15s',
        '&:hover': {
          borderColor: 'secondary',
        },
      }}
    > 
      <Grid gap={0} columns={['1fr 18px']}>
        <Text sx={{ fontSize: [4], lineHeight: 'heading' }}>
          {name}
        </Text>
        <Box sx={{
          width: 14,
          height: 14,
          borderRadius: 7,
          ml: [1],
          backgroundColor: theme.tags[tags[0]]
        }}>
        </Box>
      </Grid>
      <Text sx={{pt: [2]}}>{description}</Text>
      <Box sx={{mt: [2]}}>
      {expanded &&
        metrics.map((d) => {
          return (
            <Grid key={id + d.name} columns={['75px 1fr']}>
              <Box sx={{
                textAlign: 'right',
                fontFamily: 'monospace',
                color: theme.tags[tags[0]],
                fontSize: [3]
              }}
              >
                <Text>{d.value}</Text>
              </Box>
              <Box>
                <Text sx={{fontFamily: 'faux'}}>{d.name}</Text>
              </Box>
            </Grid>
          )
        })}
      </Box>
    </Box>
  )
}

export default memo(Report)
