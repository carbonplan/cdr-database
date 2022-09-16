import { Box, Text } from 'theme-ui'
import { Button, Link } from '@carbonplan/components'
import { Left } from '@carbonplan/icons'
import Notice from '../notice'

const Intro = ({ setSection }) => {
  return (
    <Box sx={{ mt: [4] }}>
      <Button
        href='/research/cdr-database'
        size='xs'
        inverted
        prefix={<Left />}
      >
        Back
      </Button>
      <Box
        sx={{
          borderTop: ({ colors }) => `solid 1px ${colors.muted}`,
          mt: [4],
          display: ['inherit', 'inherit', 'none', 'none'],
        }}
      >
        <Notice />
      </Box>
      <Box
        sx={{
          pt: [3],
          pb: [5, 6, 6, 6],
          fontSize: [6, 6, 7, 8],
          width: 'fit-content',
          fontFamily: 'heading',
          lineHeight: 'heading',
        }}
      >
        Methods
      </Box>
      <Box
        sx={{
          pt: [0],
          pb: [4],
          mb: [1, 3, 1, 1],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'body',
          lineHeight: 'body',
        }}
      >
        Descriptions of our metrics and notes on each carbon removal project we
        have analyzed. For more on this work read our articles on what we
        learned analyzing proposals submitted to{' '}
        <Link href='/research/stripe-2020-insights'>Stripe in 2020</Link> ,{' '}
        <Link href='/research/microsoft-2021-insights'>Microsoft in 2021</Link>,
        or <Link href='/research/stripe-2021-insights'>Stripe in 2021</Link>. If
        you have questions or want to get in touch. check out the{' '}
        <Link
          href='/'
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
        section.
      </Box>
    </Box>
  )
}

export default Intro
