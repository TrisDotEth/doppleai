import type { EditAttributeById, UpdateAttributeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AttributeForm from 'src/components/Attribute/AttributeForm'

export const QUERY = gql`
  query EditAttributeById($id: Int!) {
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
const UPDATE_ATTRIBUTE_MUTATION = gql`
  mutation UpdateAttributeMutation($id: Int!, $input: UpdateAttributeInput!) {
    updateAttribute(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ attribute }: CellSuccessProps<EditAttributeById>) => {
  const [updateAttribute, { loading, error }] = useMutation(
    UPDATE_ATTRIBUTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Attribute updated')
        navigate(routes.attributes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAttributeInput,
    id: EditAttributeById['attribute']['id']
  ) => {
    updateAttribute({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Attribute {attribute?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AttributeForm attribute={attribute} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
