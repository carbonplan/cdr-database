/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'

const Expander = ({ toggle, expanded }) => {
  return <IconButton 
      onClick={toggle} 
      aria-label='Toggle more info' 
      sx={{ cursor: 'pointer' }}
    >
    <svg sx={{ height: [30, null, 20], width: [30, null, 20] }}>
      <polygon points='3,3 19,3 11,16'
        sx={{
          fill: 'text', 
          stroke: 'text', 
          strokeWidth: 1, 
          transition: '0.25s all',
          transformOrigin: [
            '11px 8px',
            null,
            '10px 8px'
          ],
          transform: [
            expanded ? '' : 'rotate(-90deg)',
            null,
            expanded ? '' : 'rotate(90deg)'
          ]
        }} />
  </svg>
  </IconButton>
}

export default Expander