import type { FindAttributeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Attribute from 'src/components/Attribute/Attribute'

export const QUERY = gql`
  query FindAttributeById($id: Int!) {
    attribute: attribute(id: $id) {
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

export const Empty = () => <div>Attribute not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ attribute }: CellSuccessProps<FindAttributeById>) => {
  return <Attribute attribute={attribute} />
}
