import { Link, routes, useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/PostsCell'

import ClerkusersCell from 'src/components/ClerkusersCell/ClerkusersCell'
import PostBox from 'src/components/PostBox/PostBox'
import ProfilePostsCell from 'src/components/ProfilePostsCell/ProfilePostsCell'

const ProfilePage = () => {
  const {pathname} = useLocation()
  return (
    <>
      <ClerkusersCell firstName={pathname.slice(1)} />
      <PostBox></PostBox>
      {/* <PostsCell></PostsCell> */}
      <ProfilePostsCell firstName={pathname.slice(1)} />
    </>
  )
}

export default ProfilePage
