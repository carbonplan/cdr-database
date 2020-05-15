import { Text, Link } from 'theme-ui'

const Feedback = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      You can use our {' '}<Link href='https://github.com/carbonplan/api'>API</Link>{' '}
      to download all project data as JSON or CSV.
    </Text>
    <Text sx={{ mb: [2] }}>
      Want to provide feedback on our website, design, or graphics? Open an 
      issue <Link href='https://github.com/carbonplan/reports'>here</Link>.
      Want to provide feedback on our metrics or analysis methods? Open an 
      issue <Link href='https://github.com/carbonplan/reports'>here</Link> or email us at{' '}
      <Link href='mailto:feedback@carbonplan.org'>feedback@carbonplan.org</Link>.
    </Text>
    <Text sx={{ mb: [2] }}>
      Are you a project developer with specific questions about the report of your project? Email us at{' '}
      <Link href='mailto:feedback@carbonplan.org'>feedback@carbonplan.org</Link>.
    </Text>
    </>
  )
}

export default Feedback
