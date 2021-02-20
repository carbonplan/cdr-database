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
            }}
            value={value}
          />
          <Box
            as='span'
            sx={{
              display: 'inline-block',
              position: 'absolute',
              opacity: !hasFocus ? 0.8 : 0,
              borderWidth: '1px',
              pl: ['3px'],
              pr: ['4px'],
              fontSize: [1],
              borderRadius: '4px',
              borderStyle: 'solid',
              borderColor: 'secondary',
              color: 'secondary',
              transition: '0.15s',
              left: ['148px'],
              top: ['2px'],
              userSelect: 'none',
            }}
          >
            /
          </Box>
        </Box>
      </Field>
    </Box>
  )
}

export default memo(Search)
