import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useColorMode, Grid, Flex, Container, Box, Text } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import { withAuth } from '../lib/auth'
import Report from '../components/projects/report'
import collection from '../data/projects'

function Embed() {
  const [colorMode, setColorMode] = useColorMode()
  const [project, setProject] = useState(null)

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
      setProject(project)
    }
  }, [router])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mx: [3], my: [3] }}>
        {project && (
          <Report
            setHighlighted={null}
            data={project}
            tooltips={false}
            embed={true}
          />
        )}
      </Box>
    </Box>
  )
}

export default Embed
