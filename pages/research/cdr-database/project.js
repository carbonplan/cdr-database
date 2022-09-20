import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid, Flex, Divider, Container, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import {
  Layout,
  Button,
  FadeIn,
  Row,
  Column,
  Guide,
} from '@carbonplan/components'
import { Left } from '@carbonplan/icons'
import Notice from '../../../components/notice'
import Report from '../../../components/projects/report'
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
    <>
      <Box sx={{ display: ['none', 'none', 'inherit', 'inherit'] }}>
        <Notice />
      </Box>
      <Layout
        footer={false}
        metadata={false}
        dimmer={true}
        title={'CDR Project – CarbonPlan'}
        description={`Report for ${project?.applicant} – an entry from our public database of reports on carbon removal projects.`}
        card={'https://images.carbonplan.org/social/cdr-database.png'}
        nav={'research'}
      >
        <Guide />

        <Row sx={{ mb: [-8, -8, -9, -10] }}>
          <Column start={[1]} width={[6, 8, 4, 4]} sx={{ mt: [4] }}>
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
                pt: [4],
                pb: [5, 6, 6, 6],
                fontSize: [6, 6, 7, 8],
                width: 'fit-content',
                fontFamily: 'heading',
                lineHeight: 'heading',
              }}
            >
              CDR Project
            </Box>
            <Row columns={[6, 8, 4, 4]}>
              <Column start={[1]} width={[6, 6, 3, 3]}>
                <Box
                  sx={{
                    pt: [0],
                    pb: [4],
                    mb: [1, 1, 1, 1],
                    fontSize: [3, 3, 3, 4],
                    fontFamily: 'body',
                    lineHeight: 'body',
                  }}
                >
                  This is an entry from our database of reports on carbon
                  dioxide removal project proposals. It represents our
                  evaluation of a project based on publicly available materials.
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
                <Divider
                  sx={{
                    my: [0],
                    display: ['initial', 'initial', 'none', 'none'],
                  }}
                />
              </Column>
            </Row>
          </Column>
          <Column
            start={[5]}
            width={[1]}
            sx={{ display: ['none', 'none', 'initial', 'initial'] }}
          >
            <Box
              sx={{
                height: [
                  'auto',
                  'auto',
                  'calc(100vh - 150px)',
                  'calc(100vh - 196px)',
                ],
                borderWidth: '0px',
                borderLeftWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'muted',
                width: '1px',
                position: 'fixed',
                mt: [6, 6, 6, 7],
              }}
            ></Box>
          </Column>
          <Column
            start={[1, 1, 6, 6]}
            width={[6, 6, 6, 5]}
            sx={{ mt: [1, 2, 4, 4] }}
          >
            <Box
              sx={{
                my: [0, 2, '21px'],
                pt: [2, 2, '24px', '28px'],
                pb: [5, 5, 0],
                pr: [0, 0, 2],
                minHeight: [0, 0, '650px'],
                width: '100%',
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
          </Column>
        </Row>
      </Layout>
    </>
  )
}

export default Project
