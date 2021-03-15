import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid, Flex, Container, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'
import { withAuth } from '../lib/auth'
import Report from '../components/projects/report'
import collection from '../data/projects'

const selectMetric = (d, name) => {
  return d.metrics.filter((m) => m.name == name)[0].value
}

const Project = () => {
  const [project, setProject] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (id) {
      const project = collection.projects.filter((d) => {
        return d.id == id
      })[0]
      setProject(project)
    }
  }, [router])
  
  return (
    <Layout footer={false} metadata={false} dimmer={true}>
      <Grid columns={[1, 1, '418px 1fr']} gap={['0px']}>
        <Box
          sx={{
            pr: [0, 0, 4],
          }}
        >
          <Box
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'heading',
              fontSize: [6],
              pt: [1, 3, 3],
              mb: [1],
              mt: [0],
            }}
          >
            CDR Project
          </Box>
          <Box sx={{ fontSize: [2], pb: [3, 3, 1] }}>
            <Box sx={{ pt: [0, 0, 1], mb: [0, 0, 1], pb: [0, 0, 3] }}>
              This is an entry from our database of reports on carbon dioxide
              removal project proposals. It represents our evaluation of a
              project based on publicly available materials.
            </Box>
            <Box>
              To learn more about our reports, return to the main{' '}
              <NextLink href={'/'} passHref>
                <Link>database</Link>
              </NextLink>{' '}
              or read our{' '}
              <NextLink href={'/methods'} passHref>
                <Link>methods</Link>
              </NextLink>
              .
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            my: [2, 2, '24px'],
            pl: [0, 0, 4],
            pt: ['0px', '0px', '24px'],
            pb: [2, 2, '24px'],
            borderStyle: 'solid',
            borderWidth: '0px',
            borderLeftWidth: ['0px', '0px', '1px'],
            borderColor: 'muted',
            width: '100%',
          }}
        >
          {project && (
            <Report
              setHighlighted={null}
              data={project}
              tooltips={false}
              embed={true}
            />
          )}
        </Box>
      </Grid>
    </Layout>
  )
}

export default Project
