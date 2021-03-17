import { useThemeUI, Box } from 'theme-ui'
import { useRef, useState } from 'react'

const Share = ({ value, label, children }) => {
  const [copied, setCopied] = useState(false)
  const [tick, setTick] = useState(null)

  const { theme } = useThemeUI()

  const copy = () => {
    const blank = document.createElement('textarea')
    document.body.appendChild(blank)
    blank.value = value
    blank.select()
    document.execCommand('copy')
    document.body.removeChild(blank)
    if (tick) clearTimeout(tick)
    setCopied(true)
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)
    setTick(timeout)
  }

  return (
    <Box as='span'>
      <Box
        onClick={(e) => {
          e.stopPropagation()
          copy()
        }}
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          ml: [2],
          color: copied ? 'text' : 'secondary',
          stroke: copied ? theme.colors.text : theme.colors.secondary,
          '&:hover': {
            color: 'text',
            stroke: theme.colors.text,
          },
        }}
      >
        {copied ? 'Copied!' : label}
        {children}
      </Box>
    </Box>
  )
}

export default Share
