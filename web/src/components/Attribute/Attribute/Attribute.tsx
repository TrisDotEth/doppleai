import type {
  DeleteAttributeMutationVariables,
  FindAttributeById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_ATTRIBUTE_MUTATION = gql`
  mutation DeleteAttributeMutation($id: Int!) {
    deleteAttribute(id: $id) {
      id
    }
  }
`

interface Props {
  attribute: NonNullable<FindAttributeById['attribute']>
}

const Attribute = ({ attribute }: Props) => {
  const [deleteAttribute] = useMutation(DELETE_ATTRIBUTE_MUTATION, {
    onCompleted: () => {
      toast.success('Attribute deleted')
      navigate(routes.attributes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAttributeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete attribute ' + id + '?')) {
      deleteAttribute({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Attribute {attribute.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{attribute.id}</td>
            </tr>
            <tr>
              <th>Attribute</th>
              <td>{attribute.attribute}</td>
            </tr>
            <tr>
              <th>In use</th>
              <td>{checkboxInputTag(attribute.inUse)}</td>
            </tr>
            <tr>
              <th>Disabled at</th>
              <td>{timeTag(attribute.disabledAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(attribute.createdAt)}</td>
            </tr>
            <tr>
              <th>Profile id</th>
              <td>{attribute.profileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAttribute({ id: attribute.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(attribute.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Attribute
