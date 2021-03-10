import { memo, useState, useEffect, useRef } from 'react'
import { Box, Grid, Text, Input } from 'theme-ui'
import useKeyPress from 'react-use/lib/useKeyPress'
import Field from './field'

const Search = ({ setSearch, tooltips }) => {
  const [value, setValue] = useState('')
  const [hasFocus, setFocus] = useState(false)
  const inputRef = useRef(null)
  const slash = useKeyPress('/')

  useEffect(() => {
    if (slash[0] && !hasFocus) inputRef.current.focus()
  }, [slash])

  return (
    <Box sx={{ mr: ['24px'] }}>
      <Field label='search' tooltips={tooltips}>
        <Text variant='label'>Search</Text>
        <Box sx={{ position: 'relative' }}>
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
