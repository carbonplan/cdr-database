import { Box } from 'theme-ui'
import { Icons } from '@carbonplan/components'

const Tooltip = ({
  value,
  tooltips,
  selectedTooltips,
  setSelectedTooltips,
}) => {
  return (
    <Box>
      <Box
        sx={{ display: 'inline-block', cursor: 'pointer', mt: ['3px'] }}
        onClick={(e) => {
          e.stopPropagation()
          if (selectedTooltips.includes(value)) {
            setSelectedTooltips(selectedTooltips.filter((d) => !(d === value)))
          } else {
            setSelectedTooltips([...new Set(selectedTooltips.concat(value))])
          }
        }}
      >
        <Icons.Info
          closed={true}
          sx={{
            opacity: tooltips ? 1 : 0,
            color: 'secondary',
            width: 16,
            height: 16,
            transition: '0.15s',
            color: selectedTooltips.includes(value) ? 'primary' : 'secondary',
            '&:hover': {
              stroke: 'primary',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Tooltip
