import type { UserPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ProfileFeed from '../ProfileFeed/ProfileFeed'


export const QUERY = gql`
  query UserPostsQuery ($firstName: String!) {
    userPosts(firstName: $firstName) {
      id
      body
      user
      profileImageUrl
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ userPosts }: CellSuccessProps<UserPostsQuery>) => {
  return (
    <div>
      <ProfileFeed posts={userPosts} />
    </div>
  )
}
