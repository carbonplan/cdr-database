import { Box, Text, Form, Heading, Label, Input, Button } from 'theme-ui'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Layout, Row, Column } from '@carbonplan/components'
import { useSession } from '../lib/session'

function Login({ origin }) {
  const router = useRouter()
  const [, setSession] = useSession()
  const [status, setStatus] = useState(null)
  const [password, setPassword] = useState('')

  const { redirect } = router.query

  const disabled = ['authenticating', 'submitting'].includes(status)

  async function submit(e) {
    setStatus('submitting')
    e.preventDefault()
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password: password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.status !== 200) {
      setStatus('invalid')
      setTimeout(() => {
        setStatus(null)
      }, 1000)
    } else {
      const { username, token } = await res.json()
      setSession({ token: token, username: username })
      setStatus('authenticating')
      if (redirect) {
        router.push(redirect)
      } else {
        router.push('/')
      }
    }
  }

  return (
    <Layout status={status} footer={false}>
      <Row sx={{ mt: [5] }}>
        <Column start={[1, 2]} width={[6, 6]}>
          <Heading sx={{ my: [4, 5, 5], fontSize: [6, 7, 7] }}>
            This page is private
          </Heading>
          <Text sx={{ my: [3, 4, 4], fontSize: [4, 5, 5] }}>
            Enter a password to continue
          </Text>
          <Box as='form' onSubmit={submit} sx={{ fontSize: [4], mb: [4] }}>
            <Input
              sx={{
                width: ['200px'],
                mt: [2],
                borderStyle: 'solid',
                borderWidth: '0px',
                borderBottomWidth: '1px',
                borderColor: 'secondary',
                borderRadius: '0px',
                transition: '0.15s',
                ':focus-visible': {
                  outline: 'none !important',
                  background: 'none !important',
                  borderColor: 'primary',
                },
              }}
              type='password'
              name='password'
              id='password'
              value={password}
              placeholder='Password?'
              autoFocus={true}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <Button
              disabled={disabled}
              onClick={submit}
              type='submit'
              sx={{
                fontFamily: 'faux',
                color: 'text',
                display: 'inline-block',
                mr: [3],
                fontSize: [7],
                mt: [2],
                cursor: 'pointer',
                '&:hover': {
                  color: disabled ? 'primary' : 'secondary',
                },
                background: 'none',
                p: [0],
              }}
            >
              →
            </Button>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

export default Login
