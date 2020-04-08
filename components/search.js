/** @jsx jsx */
import { jsx, Box, Input, Button } from 'theme-ui'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const LiveSearch = () => {
  const [input, setInput] = useState({})
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const searchTerm = e.currentTarget.value.trim()
    dispatch({ type: 'SEARCH', value: searchTerm })
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
        sx={{ '&:focus': { outline: 'none' } }}
      />
    </Box>
  )
}

export default LiveSearch