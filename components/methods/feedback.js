import { Text, Link } from 'theme-ui'

const Feedback = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      Want to provide feedback on a metric, method, or this dashboard? Open an 
      issue <Link href='https://github.com/carbonplan/reports'>here</Link>.
    </Text>
    <Text sx={{ mb: [2] }}>
      Want to provide feedback on our API or schema? Open an 
      issue <Link href='https://github.com/carbonplan/api'>here</Link>.
    </Text>
    <Text sx={{ mb: [2] }}>
      Are you a project developer or funder and interested in our work? Email us at{' '}
      <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>.
    </Text>
    </>
  )
}

export default Feedback
