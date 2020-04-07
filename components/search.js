/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui'
import { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
    }
}

class LiveSearch extends Component {

    state = {
        input: ''
    }

    render() {
        const { dispatch } = this.props

        const handleChange = (e) => {
            this.setState({ input: e.target.value })
            const searchTerm = this.state.input.trim()
            dispatch({ type: 'SEARCH', value: searchTerm })

        }

        return <Box>
            <input
                type='text'
                placeholder='Search CarbonPlan Reports'
                value={this.state.input}
                onChange={handleChange}
                sx={{ width: 210, border: 'text', background: 'text', variant: 'text.input', '&:focus': { outline: 'none' } }}
            />
        </Box>
    }

}

export default connect(mapStateToProps)(LiveSearch)