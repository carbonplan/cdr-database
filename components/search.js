/** @jsx jsx */
import { jsx, Box, Input } from 'theme-ui'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const input = useSelector((state) => state.search)

  const handleInputChange = (e) => {
    const searchTerm = e.currentTarget.value
    dispatch({ type: 'UPDATE_SEARCH', value: searchTerm })
  }

  return (
    <Box>
      <Input
        type='text'
        autoFocus='true'
        placeholder='search reports'
        onChange={handleInputChange}
        sx={{
          fontSize: [2],
          pt: [2],
          pb: ['6px'],
          pl: [0],
          pr: [0],
          fontFamily: 'monospace',
          borderRadius: '0px',
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: '0px',
          textAlign: 'right',
        }}
        value={input}
      />
    </Box>
  )
}

export default Search
