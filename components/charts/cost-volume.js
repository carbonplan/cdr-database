/** @jsx jsx */
import _ from 'lodash'
import { jsx } from 'theme-ui'
import { Component } from 'react'
import { VegaLite } from 'react-vega'
import { array } from 'vega'

const config = {
    background: 'rgb(255, 255, 255)',
    padding: { left: 75, right: 0, top: 30, bottom: 50 },
    axis: {
        grid: false,
        labelFontSize: 14,
        labelFont: 'LeagueMonoRegular',
        labelColor: 'rgb(72,72,72)',
        titleFont: 'LeagueMonoRegular',
        titleFontSize: 14,
        titleColor: 'rgb(72,72,72)',
        domain: false,
        tickOffset: -3.7
    },
    view: {
        stroke: 'transparent'
    },
    line: {
        strokeWidth: 5,
        color: '#1A7D41'
    },
    autosize: {
        type: 'none'
    }
}

class CostVolume extends Component {

    constructor(props) {
        super(props)
        this.state = { innerWidth: false, query: false }
    }

    componentDidMount() {
        this.setState({
            innerWidth: window.innerWidth,
            query: window.matchMedia("(max-width: 40em)")
        })
    }

    render() {

        const { projects } = this.props
        const { innerWidth, query } = this.state

        // const cost = projects.map(p => parseFloat(p.metrics.filter(m => (m.name == 'Cost today'))[0].value))
        // console.log('cost', cost)
        // const volume = projects.map(p => parseFloat(p.metrics.filter(m => (m.name == 'Volume today'))[0].value))
        // console.log('volume', volume)

        var values = []
        for (var i = 0; i < projects.length; i++) {
            values.push(
                {
                    cost: parseFloat(projects[i].metrics.filter(m => (m.name == 'Cost today'))[0].value),
                    volume: parseFloat(projects[i].metrics.filter(m => (m.name == 'Volume today'))[0].value)
                }
            )
        }

        console.log('values', values)

        let color, stops

        color = '#63BB6E'
        stops = [
            { offset: 0, color: '#C2E598' },
            { offset: 0.25, color: '#94D284' },
            { offset: 0.5, color: '#63BB6E' },
            { offset: 0.75, color: '#399D56' },
            { offset: 1, color: '#1A7D41' }
        ]

        const spec = {
            data: { name: 'values'},
            mark: {
                type: 'circle',
            },
            encoding: {
                x: {
                    field: 'volume', type: 'quantitative',
                    axis: { title: 'Total volume (tCO2)' },
                },
                y: {
                    field: 'cost', type: 'quantitative',
                    axis: { title: 'Cost today ($/tCO2)' },
                }
            }
        }

        let width, height

        if (query.matches) {
            width = innerWidth * 0.4
            height = width * 0.42
        } else {
            width = 300
            height = 125
        }

        return <VegaLite config={config} width={width} height={height}
            data={{ values: values }} actions={false} spec={spec} />
    }

}

export default CostVolume

