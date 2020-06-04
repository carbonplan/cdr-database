/** @jsx jsx */
import { jsx, Box, Flex, Container, IconButton, Link, Image } from 'theme-ui'
import Logo from './logo'
import { useState } from 'react'
import { default as NextLink } from 'next/link'
import { alpha } from '@theme-ui/color'

const link = {
  width: 'fit-content',
  color: 'text',
  fontSize: [5, 5, 7],
  pb: [0],
  textDecoration: 'none',
  display: 'block',
  '&:hover': {
    color: 'secondary',
    borderBottomWidth: '1px',
    borderColor: 'secondary',
  },
}

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return (
    <Flex
      sx={{
        margin: '0 auto',
        width: '100%',
        justifyContent: 'space-between',
        pt: ['12px'],
        pb: [3],
      }}
    >
      <Box>
        <Logo></Logo>
      </Box>
      <Box>
        <IconButton
          onClick={toggle}
          sx={{
            cursor: 'pointer',
            fill: 'none',
            strokeWidth: '2px',
            stroke: 'text',
            '.paren': {
              opacity: '0',
            },
            '&:hover .paren': {
              opacity: '1',
            },
          }}
          aria-label='Toggle Menu'
        >
          {!expanded && (
            <svg
              sx={{
                width: '50px',
                height: '30px',
                transform: 'scale(2)',
                mt: ['-3px'],
              }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 68 36'
            >
              <line x1='52' y1='29.9' x2='16' y2='29.9' />
              <line x1='52' y1='6.1' x2='16' y2='6.1' />
              <line x1='52' y1='18' x2='16' y2='18' />
              <path
                sx={{ transition: 'all 0.25s' }}
                className='paren'
                d='M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6'
              />
              <path
                sx={{ transition: 'all 0.25s' }}
                className='paren'
                d='M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6'
              />
            </svg>
          )}
          {expanded && (
            <svg
              sx={{
                width: '50px',
                height: '30px',
                transform: 'scale(2)',
                mt: ['-3px'],
              }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 68 36'
            >
              <line x1='50.85' y1='29.79' x2='17.15' y2='6.21' />
              <line x1='17.15' y1='29.79' x2='50.85' y2='6.21' />
              <path
                sx={{ transition: 'all 0.25s' }}
                className='paren'
                d='M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6'
              />
              <path
                sx={{ transition: 'all 0.25s' }}
                className='paren'
                d='M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6'
              />
            </svg>
          )}
        </IconButton>
        <Box
          sx={{
            opacity: expanded ? 1 : 0,
            pointerEvents: expanded ? 'all' : 'none',
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            minWidth: '0px',
            maxHeight: '100vh',
            width: '100vw',
            backgroundColor: 'background',
            textAlign: '-webkit-right',
            zIndex: 1000,
            mt: ['56px'],
            pt: [3],
            transition: '0.25s',
          }}
        >
          <Container>
            <Box
              sx={{
                textAlign: '-webkit-right',
                width: 'fit-content',
                mr: [4],
                fontSize: ['92px'],
              }}
            >
              <Link href='/about' sx={link}>
                About
              </Link>
              <Link href='/reports' sx={link}>
                Reports
              </Link>
              <Link href='/research' sx={link}>
                Research
              </Link>
              <Link href='/team' sx={link}>
                Team
              </Link>
              <Link href='/faq' sx={link}>
                FAQ
              </Link>
            </Box>
          </Container>
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
