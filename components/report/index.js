import { memo } from 'react'
import { Box, Text } from 'theme-ui'

const Report = ({name, description, tags}) => {
  return <Box sx={{
    borderStyle: 'solid',
    borderColor: 'muted',
    borderWidth: '1px',
    borderRadius: '6px',
    p: [3],
    pt: [2],
  }}>
    <Text>{name}</Text>
    <Text>{description}</Text>
    <Text>{tags}</Text>
  </Box>
}

export default memo(Report)