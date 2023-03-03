import type { ClerkusersQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ProfileHeader from 'src/components/ProfileHeader/ProfileHeader'

export const QUERY = gql`
  query ClerkusersQuery ($firstName: String!)  {
    clerkuser(firstName: $firstName) {
      firstName
      lastName
      profileImageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ clerkuser }: CellSuccessProps<ClerkusersQuery>) => {

  console.log('clerkuser is - ',clerkuser)
  return (
    <ProfileHeader user={clerkuser}/>
  )
}
