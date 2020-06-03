import { Text, Link } from 'theme-ui'

const Feedback = () => {
  return (
    <>
      <Text sx={{ mb: [2] }}>
        Our <Link href="https://github.com/carbonplan/api">API</Link> lets you
        download all project data as JSON or CSV.
      </Text>
      <Text sx={{ mb: [2] }}>
        Want to provide feedback on this dashboard or make a feature request?
        Open an issue{' '}
        <Link href="https://github.com/carbonplan/reports">here</Link>.
      </Text>
      <Text sx={{ mb: [2] }}>
        Want to provide feedback on our metrics or analysis methods? Open an
        issue <Link href="https://github.com/carbonplan/reports">here</Link> or
        email us at{' '}
        <Link href="mailto:feedback@carbonplan.org">
          feedback@carbonplan.org
        </Link>
        .
      </Text>
      <Text sx={{ mb: [2] }}>
        Are you a project developer with specific questions about the report of
        your project? Email us at{' '}
        <Link href="mailto:feedback@carbonplan.org">
          feedback@carbonplan.org
        </Link>
        .
      </Text>
    </>
  )
}

export default Feedback
