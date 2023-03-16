import type { FindAttributes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Attributes from 'src/components/Attribute/Attributes'

export const QUERY = gql`
  query FindAttributes {
    attributes {
      id
      attribute
      inUse
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
      {'No attributes yet. '}
      <Link
        to={routes.newAttribute()}
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

export const Success = ({ attributes }: CellSuccessProps<FindAttributes>) => {
  return <Attributes attributes={attributes} />
}
