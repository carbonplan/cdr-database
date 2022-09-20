import { Box } from 'theme-ui'
import { Link } from '@carbonplan/components'

const Notice = () => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          display: ['none', 'none', 'block', 'block'],
          top: '16px',
          left: [
            'calc(32.5% + 32px)',
            'calc(32.5% + 32px)',
            'calc(32.5% + 32px)',
            'calc(32.5% + 48px)',
          ],
          color: 'secondary',
          zIndex: 5000,
        }}
      >
        This resource is no longer maintained or updated, read our{' '}
        <Link
          sx={{ color: 'secondary' }}
          href='https://carbonplan.org/blog/cdr-database-archived'
        >
          post
        </Link>
        .
      </Box>
      <Box
        sx={{
          display: ['inherit', 'inherit', 'none', 'none'],
          top: '68px',
          left: ['24px', '32px', 0],
          color: 'secondary',
          zIndex: 5000,
          fontSize: [1],
          mt: [3],
          borderBottom: ({ colors }) => `solid 1px ${colors.muted}`,
          pb: [3],
        }}
      >
        This resource is no longer maintained or updated, read our{' '}
        <Link
          sx={{ color: 'secondary' }}
          href='https://carbonplan.org/blog/cdr-database-archived'
        >
          post
        </Link>
        .
      </Box>
    </>
  )
}

export default Notice
