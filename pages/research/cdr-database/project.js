import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid, Flex, Container, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'
import Report from '../../../components/projects/report'
import FadeIn from '../../../components/fade-in'
import collection from '../../../data/projects'

const selectMetric = (d, name) => {
  return d.metrics.filter((m) => m.name == name)[0].value
}

const Project = () => {
  const [project, setProject] = useState(null)
  const [missing, setMissing] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (id) {
      const project = collection.projects.filter((d) => {
        return d.id == id
      })[0]
      if (project) {
        setMissing(false)
        setProject(project)
      } else {
        setMissing(true)
        setProject(id)
      }
    }
  }, [router])

  return (
    <Layout
      footer={false}
      metadata={false}
      dimmer={true}
      title={'cdr database / research / carbonplan'}
      description={'Public database of reports on carbon removal projects.'}
      card={'https://images.carbonplan.org/social/cdr-database.png'}
    >
      <Grid columns={[1, 1, 'min(40%, 418px) 1fr']} gap={['0px']}>
        <Box
          sx={{
            pr: [0, 0, 5],
            '@media only screen and (min-width: 100em)': {
              pr: [0, 0, '128px'],
            },
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
            <Box sx={{ pt: [0, 1, 1], mb: [0, 0, 1], pb: [0, 0, 3] }}>
              This is an entry from our database of reports on carbon dioxide
              removal project proposals. It represents our evaluation of a
              project based on publicly available materials.
              <Box as='span' sx={{ display: ['none', 'none', 'initial'] }}>
                <br />
                <br />
              </Box>
              To learn more about our reports, return to the main{' '}
              <NextLink href={'/research/cdr-database'} passHref>
                <Link>database</Link>
              </NextLink>{' '}
              or read our{' '}
              <NextLink href={'/research/cdr-database/methods'} passHref>
                <Link>methods</Link>
              </NextLink>
              .
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            my: [2, 2, '21px'],
            pl: [0, 0, 5],
            pt: [3, 3, '24px'],
            pb: [4, 4, '24px'],
            pr: [0, 0, 2],
            borderStyle: 'solid',
            borderWidth: '0px',
            borderLeftWidth: ['0px', '0px', '1px'],
            borderTopWidth: ['1px', '1px', '0px'],
            borderColor: 'muted',
            minHeight: [0, 0, '650px'],
            width: '100%',
            '@media only screen and (min-width: 100em)': {
              pl: [0, 0, '128px'],
            },
          }}
        >
          {project && missing == false && (
            <FadeIn delay={10} duration={150}>
              <Report
                setHighlighted={null}
                data={project}
                tooltips={true}
                embed={true}
              />
            </FadeIn>
          )}
          {missing == true && (
            <FadeIn delay={10} duration={150}>
              <Box>
                <Box
                  sx={{
                    mt: [1, 1, '8px'],
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    fontSize: [1],
                    textTransform: 'uppercase',
                    color: 'secondary',
                  }}
                >
                  Project '{project}' not found
                </Box>
                <Box
                  sx={{
                    mt: [3],
                    fontSize: [2],
                    letterSpacing: 'body',
                  }}
                >
                  Try double checking your URL and try again.
                </Box>
              </Box>
            </FadeIn>
          )}
        </Box>
      </Grid>
    </Layout>
  )
}

export default Project
