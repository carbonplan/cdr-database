/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'

const Expander = ({ toggle, expanded }) => {
  return <IconButton 
      onClick={toggle} 
      aria-label='Toggle more info' 
      sx={{ 
        cursor: 'pointer',
        fill: 'secondary', 
        stroke: 'secondary', 
        '&:hover': {
          fill: 'text', 
          stroke: 'text', 
        }
      }}
    >
    <svg height='16px' width='16px'>
      <path d='M8,0 V16 M0,8 H16'
        sx={{
          strokeWidth: 3, 
          transition: '0.25s all',
          transformOrigin: '8px 8px',
          transform: expanded ? 'rotate(-45deg)' : ''
        }} />
  </svg>
  </IconButton>
}

export default Expander