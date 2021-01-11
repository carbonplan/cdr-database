import { memo, useState } from 'react'
import { Box, Text } from 'theme-ui'

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
        p: [3],
        pt: [2],
        my: [3],
        transition: 'border-color 0.15s',
        '&:hover': {
          borderColor: 'secondary',
        },
      }}
    >
      <Text sx={{ fontSize: [4], lineHeight: 'heading' }}>{name}</Text>
      <Text>{description}</Text>
      <Text>{tags}</Text>
      {expanded &&
        metrics.map((d) => {
          return (
            <Box key={id + d.name}>
              <Text>{d.name}</Text>
              <Text>{d.value}</Text>
            </Box>
          )
        })}
    </Box>
  )
}

export default memo(Report)
