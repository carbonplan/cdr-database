import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { Grid } from 'theme-ui'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { withAuth } from '../lib/auth'
import data from '../data'

function Index() {
  useEffect(() => {
    document.body.addEventListener('keyup', function (e) {
      if (e.which === 9) {
        document.documentElement.classList.remove('no-focus-outline')
      }
    })
  })

  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  if (projects.length == 0) {
    dispatch({ type: 'INIT_PROJECTS', value: data.projects })
    dispatch({ type: 'INIT_VISIBILITY' })
  }

  const router = useRouter()
  const query = router.query
  const { id, expand } = query

  if (id) {
    dispatch({ type: 'UPDATE_SEARCH', value: id.replace(/^"(.*)"$/, '$1') })
  }

  if (expand) dispatch({ type: 'SHOW_ONE', value: true })

  return (
    <Layout>
      <Grid columns={[1, 1, '52% 48%']} gap={['0px']}>
        <Main projects={data.projects}></Main>
        <Sidebar projects={data.projects}></Sidebar>
      </Grid>
    </Layout>
  )
}

export default withAuth(Index)
