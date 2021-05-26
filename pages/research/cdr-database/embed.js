import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useColorMode, Grid, Flex, Container, Box, Text } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import Report from '../../../components/projects/report'
import collection from '../../../data/projects'

function Embed() {
  const [colorMode, setColorMode] = useColorMode()
  const [project, setProject] = useState(null)
  const [missing, setMissing] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const { id, theme } = router.query
    if (theme) {
      if (theme === 'light') setColorMode(theme)
      if (theme === 'dark') setColorMode(theme)
    }
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mx: [3], mt: [3] }}>
        {project && missing == false && (
          <Report
            setHighlighted={null}
            data={project}
            tooltips={true}
            embed={true}
          />
        )}
        {missing == true && (
          <Box>
            <Box
              sx={{
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
        )}
      </Box>
    </Box>
  )
}

export default Embed
