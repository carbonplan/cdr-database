import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { useEffect } from 'react'
import { withRedux } from '../lib/redux'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import globals from '../globals'
import fetch from 'isomorphic-unfetch'

function Index (props) {

  useEffect(() => {
    document.body.addEventListener('keyup', function(e) {
      if (e.which === 9) {
        document.documentElement.classList.remove('no-focus-outline');
      }
    })
  })

  const dispatch = useDispatch()
  dispatch({ type: 'INIT_PROJECTS', value: props.projects })
  dispatch({ type: 'INIT_VISIBILITY' })
  dispatch({ type: 'INIT_FUSE' })

  const router = useRouter()
  const query = router.query
  const { search, id, expand } = query

  if (search) {
    dispatch({ type: 'UPDATE_SEARCH', value: search.replace(/^"(.*)"$/, '$1') })
  }
  if (id) {
    dispatch({ type: 'UPDATE_SEARCH', value: id.replace(/^"(.*)"$/, '$1') })
  }
  // if (expand) {
  //   dispatch({ type: 'SHOW_ONE', value: true })
  // }
  const tags = query.tags

  if (tags) {
    dispatch({ type: 'SET_TAGS', value: tags.replace(/^"(.*)"$/, '$1').split(',') })
  }

  return (
    <Layout>
      <Main props={props}></Main>
      <Sidebar props={props}></Sidebar>
    </Layout>
  )
}

export async function getStaticProps() {

  const res = await fetch(globals.apiServer + 'projects')
  const data = await res.json()

  return { props: { projects: data.projects } }
}

export default withRedux(Index)