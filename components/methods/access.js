import { Text, Link } from 'theme-ui'

const Access = () => {
  return (
    <>
    <Text sx={{ mb: [2] }}>
      We have a standardized, versioned{' '}
      <Link href='https://github.com/carbonplan/schema'>JSON schema</Link>{' '}
      for project metrics, and you can download all project metrics using our public API. 
    </Text>
    <Text>
      You can use{' '}<Link href='/'>[URL]</Link>{' '}
      to download all metrics as JSON, or you can specify a specify project id, for example,
      {' '}<Link href='/'>[URL]</Link>{' '}
    </Text>
    </>
  )
}

export default Access
