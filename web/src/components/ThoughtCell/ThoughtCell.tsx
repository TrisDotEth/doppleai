import type { ThoughtQuery, ThoughtQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PostBox from 'src/components/PostBox/PostBox'

export const QUERY = gql`
  query ThoughtQuery {
    thought {
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>
    <PostBox thought={{ body: 'Pulled kicking and screming from the void' }} />
  </div>
)

export const Failure = ({ error }: CellFailureProps<ThoughtQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  thought,
}: CellSuccessProps<ThoughtQuery, ThoughtQueryVariables>) => {
  return <PostBox thought={thought} />
}
