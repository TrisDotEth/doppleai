import { SignIn } from '@clerk/clerk-react'

import { useAuth } from 'src/auth'
import PostBox from 'src/components/PostBox/PostBox'
import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  const { isAuthenticated, signUp, userMetadata, currentUser, logOut } = useAuth()
  console.dir(userMetadata)

  return (
    <>
      {/* MetaTags, h1, paragraphs, etc. */}

      {/* <p>{JSON.stringify({ isAuthenticated })}</p> */}
      {/* <p>{JSON.stringify({ userMetadata })}</p> */}
      {/* <p>{isAuthenticated && userMetadata.fullName}</p>
      <p>{JSON.stringify({ currentUser })}</p>
      <img
        className="h-10 w-10"
        src={isAuthenticated && userMetadata.profileImageUrl}
        alt="Profile"
      />
      <button onClick={signUp}>sign up</button> */}

      {isAuthenticated && (
        <div>
          <PostBox></PostBox>
          <PostsCell></PostsCell>
        </div>
      )}
    </>
  )
}

export default HomePage
