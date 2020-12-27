import { Text } from 'theme-ui'

const Badge = ({ label, value, toggle, color }) => {
  return <Text onClick={toggle} sx={{
    display: 'inline-block',
    letterSpacing: 'wide',
    cursor: 'pointer',
    color: color,
    borderStyle: 'solid',
    borderColor: color,
    borderWidth: '0px',
    borderBottomWidth: '1px',
    textTransform: 'uppercase',
    mb: [2],
    pt: ['1px'],
    pb: ['2px'],
    pl: [0],
    pr: [0],
    fontSize: [1],
    mr: [2],
    fontFamily: 'monospace',
    opacity: value ? 1 : 0.2
  }}>
    {label}
  </Text>
}

export default Badge