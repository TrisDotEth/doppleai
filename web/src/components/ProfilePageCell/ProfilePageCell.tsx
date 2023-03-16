import type { FindProfileById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProfileDetails from '../ProfileDetails/ProfileDetails'

export const QUERY = gql`
  query FindProfileByIdProfilePage($user: String!) {
    profileByUserString: profileByUserString(user: $user) {
      id
      user
      createdAt
      attributes {
        id
        attribute
        createdAt
        inUse
      }
      prompts {
        id
        prompt
        createdAt
        disabledAt
        isUse
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Profile not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  profileByUserString,
}: CellSuccessProps<FindProfileById>) => {
  return <ProfileDetails profile={profileByUserString} />
}
