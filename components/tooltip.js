import { Box } from 'theme-ui'
import { Icons } from '@carbonplan/components'

const Tooltip = ({ value, tooltips, setTooltips }) => {
  return (
    <Box>
      <Box
        sx={{ display: 'inline-block', cursor: 'pointer', mt: ['3px'] }}
        onClick={() => {
          if (tooltips.selected === value) {
            setTooltips({ show: tooltips.show, selected: null })
          } else {
            setTooltips({ show: tooltips.show, selected: value })
          }
        }}
      >
        <Icons.Info
          closed={true}
          sx={{
            opacity: tooltips.show ? 1 : 0,
            color: 'secondary',
            width: 16,
            height: 16,
            transition: '0.15s',
            color: tooltips.selected === value ? 'primary' : 'secondary',
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
