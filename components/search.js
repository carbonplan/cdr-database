/** @jsx jsx */
import { jsx, Box, Input, Button } from 'theme-ui'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Search = () => {
  const [input, setInput] = useState({})
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const searchTerm = e.currentTarget.value.trim()
    dispatch({ type: 'UPDATE_SEARCH', value: searchTerm })
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  return (
    <Box>
      <Input
        type='text'
        placeholder='search reports'
        onChange={handleInputChange}
        sx={{ pt: [2], '&:focus': { outline: 'none' } }}
      />
    </Box>
  )
}

export default Search