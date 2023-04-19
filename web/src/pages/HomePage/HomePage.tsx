import { SignInButton, UserButton } from '@clerk/clerk-react'

import { useAuth } from 'src/auth'
import ThoughtCell from 'src/components//ThoughtCell'
import PostBox from 'src/components/PostBox/PostBox'
import PostsCell from 'src/components/PostsCell'
import Tagline from 'src/components/Tagline/Tagline'

const HomePage = () => {
  const { isAuthenticated, signUp, logIn } = useAuth()

  return (
    <>
      <div>
        <Tagline fadeOut={false} />
        <div>
          <ThoughtCell />
          {/* <PostBox></PostBox> */}
          <PostsCell></PostsCell>
        </div>
      </div>
    </>
  )
}

export default HomePage
