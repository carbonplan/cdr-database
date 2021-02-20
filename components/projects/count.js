import { Box, Text } from 'theme-ui'

const Count = ({ value }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: 'fit-content',
        height: '24px',
        borderRadius: '5px',
        backgroundColor: 'muted',
        ml: [2],
        mr: [2],
        textAlign: 'center',
      }}
    >
      <Text
        sx={{
          fontFamily: 'monospace',
          mt: ['0px'],
          px: [1],
          color: 'text',
        }}
      >
        {value}
      </Text>
    </Box>
  )
}

export default Count
