import { Link, routes, useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ThoughtCell from 'src/components//ThoughtCell'
import ClerkusersCell from 'src/components/ClerkusersCell/ClerkusersCell'
import PostBox from 'src/components/PostBox/PostBox'
import PostsCell from 'src/components/PostsCell'
import ProfilePostsCell from 'src/components/ProfilePostsCell/ProfilePostsCell'

const ProfilePage = () => {
  const { pathname } = useLocation()
  const { currentUser } = useAuth()
  const locationFirstName = pathname.slice(1)
  const userFirstName = currentUser?.firstName

  // debugger
  return (
    <>
      <ClerkusersCell firstName={locationFirstName} />
      {userFirstName == locationFirstName && <ThoughtCell />}
      {/* <PostBox></PostBox> */}
      {/* <PostsCell></PostsCell> */}
      <ProfilePostsCell firstName={locationFirstName} />
    </>
  )
}

export default ProfilePage
