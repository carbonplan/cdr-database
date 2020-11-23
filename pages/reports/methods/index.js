import Layout from '../../../components/layout'
import { Heading, Grid, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { useState, useEffect } from 'react'
import { withAuth } from '../../../lib/auth'
import Metrics from '../../../methods/metrics.md'
import Feedback from '../../../methods/feedback.md'
import Projects from '../../../methods/projects.md'
import TOC from '../../../components/toc.js'

function Methods(props) {
  const [section, setSection] = useState('metrics')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <Layout>
      <Box sx={{}}>
        <Box
          sx={{
            display: ['initial', 'initial', 'none'],
          }}
        >
          <NextLink href='/reports' passHref={true}>
            <Link
              sx={{
                display: 'inline-block',
                fontSize: [6],
                mt: [2],
                mr: [3],
                color: 'text',
                cursor: 'pointer',
                '&:hover': {
                  color: 'secondary',
                },
                textDecoration: 'none',
              }}
            >
              ←
            </Link>
          </NextLink>
        </Box>
        <Heading
          sx={{
            pb: [3],
            pt: [1, 1, 4],
            fontSize: [6],
          }}
        >
          Methods
        </Heading>
        <Text sx={{ maxWidth: '800px', fontSize: [3] }}>
          Descriptions of our metrics and notes on each carbon removal project
          we have analyzed. Check out the{' '}
          <Link onClick={() => setSection('feedback')}>feedback</Link> section
          if you have questions or want to get in touch.
        </Text>
      </Box>
      <Grid columns={[1, 1, '17% 83%']} gap={['64px']} sx={{ mt: [4] }}>
        <Box
          sx={{
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: ['1px', '1px', '0px'],
            height: ['fit-contents', 'fit-contents', '200px'],
            backgroundColor: 'background',
            zIndex: 500,
            position: 'sticky',
            top: '56px',
            pr: [1],
            pb: [2],
          }}
        >
          <TOC setSection={setSection} section={section}></TOC>
        </Box>
        <Box
          sx={{
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderLeftWidth: ['0px', '0px', '1px'],
            pl: [1, 1, 5],
            pr: [1, 1, 7],
          }}
        >
          <Box sx={{ mt: ['-80px', '-80px', '-50px'], maxWidth: '800px' }}>
            {section == 'metrics' && <Metrics />}
            {section == 'feedback' && <Feedback />}
            {section == 'projects' && <Projects />}
          </Box>
        </Box>
      </Grid>
    </Layout>
  )
}

export default withAuth(Methods)
