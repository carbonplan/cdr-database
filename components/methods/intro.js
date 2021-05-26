import { Box, Text, Link } from 'theme-ui'
import { Buttons, Links } from '@carbonplan/components'

const { BackButton } = Buttons
const { InternalLink } = Links

const Intro = ({ setSection }) => {
  return (
    <Box sx={{ mt: [4] }}>
      <InternalLink href='/research/cdr-database'>
        <BackButton />
      </InternalLink>
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
        <InternalLink href='/research/stripe-2020-insights'>
          Stripe in 2020
        </InternalLink>{' '}
        ,{' '}
        <InternalLink href='/research/microsoft-2021-insights'>
          Microsoft in 2021
        </InternalLink>
        , or{' '}
        <InternalLink href='/research/stripe-2021-insights'>
          Stripe in 2021
        </InternalLink>
        . If you have questions or want to get in touch. check out the{' '}
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
        section.
      </Box>
    </Box>
  )
}

export default Intro
