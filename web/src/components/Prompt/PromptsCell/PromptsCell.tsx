import type { FindPrompts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Prompts from 'src/components/Prompt/Prompts'

export const QUERY = gql`
  query FindPrompts {
    prompts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No prompts yet. '}
      <Link
        to={routes.newPrompt()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prompts }: CellSuccessProps<FindPrompts>) => {
  return <Prompts prompts={prompts} />
}
