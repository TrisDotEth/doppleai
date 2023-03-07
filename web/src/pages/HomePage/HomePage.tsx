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
        {isAuthenticated ? (
          <div>
            <ThoughtCell />
            {/* <PostBox></PostBox> */}
            <PostsCell></PostsCell>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className="mb-1 mt-2 inline-flex h-[34px] w-52 items-center justify-center rounded-lg bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] px-4 text-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={signUp}
            >
              Sign up with Facebook
            </button>
            {/* <button className="ml-5 text-white" onClick={logIn}>
              sign in
            </button> */}
            {/* <SignInButton mode="modal" /> */}
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
