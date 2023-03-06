import { SignIn } from '@clerk/clerk-react'

import { useAuth } from 'src/auth'
import ThoughtCell from 'src/components//ThoughtCell'
import PostBox from 'src/components/PostBox/PostBox'
import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      {isAuthenticated && (
        <div>
          <ThoughtCell />
          {/* <PostBox></PostBox> */}
          <PostsCell></PostsCell>
        </div>
      )}
    </>
  )
}

export default HomePage
