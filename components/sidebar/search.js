import { memo, useState, useEffect, useRef } from 'react'
import { Box, Grid, Text, Input } from 'theme-ui'
import Field from './field'
import sx from '../styles'

const Search = ({ setSearch, tooltips }) => {
  const [value, setValue] = useState('')
  const [hasFocus, setFocus] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    function handler(event) {
      const { key, keyCode, metaKey } = event
      if (key === '/' && metaKey) {
        if (!hasFocus) inputRef.current.focus()
      }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <Box sx={{ mb: [-1], mt: [0, 0, 0, '22px'] }}>
      <Field label='search' displayLabel='search' tooltips={tooltips}>
        <Box sx={{ position: 'relative', width: '90%' }}>
          <Input
            type='text'
            ref={inputRef}
            placeholder={'enter search term'}
            onChange={(e) => {
              setValue(e.currentTarget.value)
              setSearch(e.currentTarget.value)
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            sx={{
              fontSize: [1],
              height: '24px',
              width: '90%',
              pt: [2],
              pb: [3],
              pl: [0],
              pr: [0],
              mt: ['3px'],
              fontFamily: 'mono',
              borderRadius: '0px',
              borderWidth: '0px',
              textAlign: 'left',
              display: 'inline-block',
              ':focus-visible': {
                outline: 'none !important',
                background: 'none !important',
              },
            }}
            value={value}
          />
        </Box>
      </Field>
    </Box>
  )
}

export default memo(Search)
