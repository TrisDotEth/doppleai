import type { PostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProfileHeader from 'src/components/ProfileHeader/ProfileHeader'

import ProfileFeed from '../ProfileFeed/ProfileFeed'

export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      body
      user
      profileImageUrl
      firstName
      lastName
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<PostsQuery>) => {
  return (
    <div>
      {/* <ProfileHeader /> */}
      <ProfileFeed posts={posts} />
    </div>
  )
}
