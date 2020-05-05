/** @jsx jsx */
import { jsx, Box, Flex, IconButton, Link, Image } from 'theme-ui'
import Logo from './logo'
import { useState } from 'react'
import { default as NextLink } from 'next/link'

const link = {
  width: 'fit-content',
  color: 'text',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'primary',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    color: 'secondary',
    borderBottomWidth: '1px',
    borderColor: 'secondary'
  }
}

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return <Flex
    sx={{
      margin: '0 auto',
      width: '100%',
      justifyContent: 'space-between',
      pt: ['12px'],
      pb: [3]
    }}
  >
    <Box>
      <Logo></Logo>
    </Box>
    <Box>
      <IconButton onClick={toggle} sx={{ 
        cursor: 'pointer',
        fill: 'none',
        strokeWidth: '2px', 
        stroke: 'text', 
        '.paren': {
          stroke: 'background'
        },
        '&:hover .paren': {
          stroke: 'text'
        }
      }} aria-label='Toggle Menu'>
        {!expanded && <svg sx={{ width: '50px', height: '30px', transform: 'scale(2)', mt: ['-3px'] }}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 68 36">
          <line x1="52" y1="29.9" x2="16" y2="29.9"/>
          <line x1="52" y1="6.1" x2="16" y2="6.1"/>
          <line x1="52" y1="18" x2="16" y2="18"/>
          <path sx={{ transition: 'all 0.25s' }} className='paren' d="M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6"/>
          <path sx={{ transition: 'all 0.25s' }} className='paren' d="M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6"/>
          </svg>
        }
        {expanded && <svg sx={{ width: '50px', height: '30px', transform: 'scale(2)', mt: ['-3px'] }}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 68 36">
          <line class="cls-1" x1="50.85" y1="29.79" x2="17.15" y2="6.21"/>
          <line class="cls-1" x1="17.15" y1="29.79" x2="50.85" y2="6.21"/>
          <path sx={{ transition: 'all 0.25s' }} className='paren' d="M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6"/>
          <path sx={{ transition: 'all 0.25s' }} className='paren' d="M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6"/>
          </svg>
        }
      </IconButton>
      {expanded && 
      <Box sx={{
        position: 'fixed', 
        top: '0px',
        right: '0px',
        bottom: '0px',
        minWidth: '0px',
        maxHeight: '100vh',
        width: '300px',
        backgroundColor: 'background',
        opacity: 1,
        textAlign: '-webkit-right',
        zIndex: 1000,
        mt: ['56px'],
        pt: [3],
        pr: ['270px'],
        pl: ['100px'],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderLeftWidth: '1px'
      }}>
      <Box sx={{ textAlign: '-webkit-right', width: 'fit-content' }}> 
      <NextLink href='/about'><Link sx={link}>About</Link></NextLink>
      <NextLink href='/team'><Link sx={link}>Team</Link></NextLink>
      <NextLink href='/research'><Link sx={link}>Research</Link></NextLink>
      <Link href='https://reports.carbonplan.now.sh/' sx={link}>Reports</Link>
      <NextLink href='/faq'><Link sx={link}>FAQ</Link></NextLink>
      </Box>
      </Box>
    }
    </Box>
  </Flex>
  
}

export default Header