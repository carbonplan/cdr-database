import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@carbonplan/components'
import { useSession } from './session'

export function useAuth() {
  const router = useRouter()
  const [{ token }] = useSession()

  const fetcher = (url, token) =>
    fetch(url, { headers: { Authorization: token } }).then((r) => r.json())

  const { data, error } = useSWR(['/api/auth', token], fetcher)
  const loading = !data && !error
  const authed = data && data.authed
  const username = data && data.authed ? data.username : null

  return { data, error, loading, authed, username }
}

export const withAuth = (Component, usernames = ['admin']) => () => {
  const router = useRouter()
  const { data, error, loading } = useAuth()

  useEffect(() => {
    if ((data && !data.authed) || error) {
      window.location.assign(
        `/login?redirect=${encodeURIComponent(router.pathname)}`
      )
    }
  }, [data])

  if (data && data.username) {
    if (!usernames.includes(data.username)) {
      data.authed = false
      return (
        <Layout status={'restricted'} footer={false} container={'wide'}></Layout>
      )
    }
  }

  if (data && data.authed) {
    return <Component />
  } else {
    return (
      <Layout
        status={'authenticating'}
        footer={false}
        container={'wide'}
      ></Layout>
    )
  }
}
