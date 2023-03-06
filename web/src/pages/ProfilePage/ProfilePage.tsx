import { Link, routes, useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ThoughtCell from 'src/components//ThoughtCell'
import ClerkusersCell from 'src/components/ClerkusersCell/ClerkusersCell'
import PostBox from 'src/components/PostBox/PostBox'
import PostsCell from 'src/components/PostsCell'
import ProfilePostsCell from 'src/components/ProfilePostsCell/ProfilePostsCell'

const ProfilePage = () => {
  const { pathname } = useLocation()
  return (
    <>
      <ClerkusersCell firstName={pathname.slice(1)} />
      <ThoughtCell />
      {/* <PostBox></PostBox> */}
      {/* <PostsCell></PostsCell> */}
      <ProfilePostsCell firstName={pathname.slice(1)} />
    </>
  )
}

export default ProfilePage
