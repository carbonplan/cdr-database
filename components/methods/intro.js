import { Box, Text, Link } from 'theme-ui'

const Intro = ({ setSection }) => {
  return (
    <Box>
      <Text
        sx={{
          fontSize: [6],
          fontFamily: 'heading',
          letterSpacing: 'heading',
          pt: [1, 3, 3],
          mb: [1],
        }}
      >
        Methods
      </Text>
      <Text sx={{ pt: [0, 0, 1], fontSize: [2] }}>
        Descriptions of our metrics and notes on each carbon removal project we
        have analyzed. Check out the{' '}
        <Link
          sx={{
            '@media (hover: none) and (pointer: coarse)': {
              '&:hover': {
                color: 'primary',
              },
            },
          }}
          onClick={() => setSection('feedback')}
        >
          feedback
        </Link>{' '}
        section if you have questions or want to get in touch.
      </Text>
    </Box>
  )
}

export default Intro
