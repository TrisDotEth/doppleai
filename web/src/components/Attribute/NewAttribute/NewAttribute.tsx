import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AttributeForm from 'src/components/Attribute/AttributeForm'

import type { CreateAttributeInput } from 'types/graphql'

const CREATE_ATTRIBUTE_MUTATION = gql`
  mutation CreateAttributeMutation($input: CreateAttributeInput!) {
    createAttribute(input: $input) {
      id
    }
  }
`

const NewAttribute = () => {
  const [createAttribute, { loading, error }] = useMutation(
    CREATE_ATTRIBUTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Attribute created')
        navigate(routes.attributes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAttributeInput) => {
    createAttribute({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Attribute</h2>
      </header>
      <div className="rw-segment-main">
        <AttributeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAttribute
