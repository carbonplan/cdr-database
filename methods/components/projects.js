import { Box, Link, Styled } from 'theme-ui'
import collection from '../../data/methods'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, {
    createElement: React.createElement,
    components: {
      a: Link,
    },
  })

const Projects = () => {
  return (
    <Box>
      {collection.methods
        .sort((a, b) => {
          return a.applicant.localeCompare(b.applicant)
        })
        .filter((d) => {
          return !(d.content === '')
        })
        .map((d) => {
          return (
            <Box id={d.id} key={d.id}>
              <Styled.h2>
                {d.applicant}
                <Box
                  as='span'
                  sx={{ fontSize: [4], color: 'secondary', ml: [3] }}
                >
                  {d.id}
                </Box>
              </Styled.h2>
              <Box sx={{ fontSize: [3] }}>
                {processor.processSync(d.content).result}
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default Projects
