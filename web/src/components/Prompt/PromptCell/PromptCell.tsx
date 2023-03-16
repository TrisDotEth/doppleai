import type { FindPromptById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Prompt from 'src/components/Prompt/Prompt'

export const QUERY = gql`
  query FindPromptById($id: Int!) {
    prompt: prompt(id: $id) {
      id
      prompt
      isUse
      disabledAt
      createdAt
      profileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Prompt not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prompt }: CellSuccessProps<FindPromptById>) => {
  return <Prompt prompt={prompt} />
}
