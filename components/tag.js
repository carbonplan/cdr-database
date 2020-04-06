import { Badge } from 'theme-ui'

const Tag = (props) => {
    var lower_tag = props.name.toLowerCase();
    return (
        <Badge variant='primary' ml={1} sx={{ 'borderColor': lower_tag}}> {props.name} </Badge>
    )
}

export default Tag
