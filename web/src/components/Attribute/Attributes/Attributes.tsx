import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Attribute/AttributesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteAttributeMutationVariables, FindAttributes } from 'types/graphql'

const DELETE_ATTRIBUTE_MUTATION = gql`
  mutation DeleteAttributeMutation($id: Int!) {
    deleteAttribute(id: $id) {
      id
    }
  }
`

const AttributesList = ({ attributes }: FindAttributes) => {
  const [deleteAttribute] = useMutation(DELETE_ATTRIBUTE_MUTATION, {
    onCompleted: () => {
      toast.success('Attribute deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAttributeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete attribute ' + id + '?')) {
      deleteAttribute({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Attribute</th>
            <th>In use</th>
            <th>Disabled at</th>
            <th>Created at</th>
            <th>Profile id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((attribute) => (
            <tr key={attribute.id}>
              <td>{truncate(attribute.id)}</td>
              <td>{truncate(attribute.attribute)}</td>
              <td>{checkboxInputTag(attribute.inUse)}</td>
              <td>{timeTag(attribute.disabledAt)}</td>
              <td>{timeTag(attribute.createdAt)}</td>
              <td>{truncate(attribute.profileId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.attribute({ id: attribute.id })}
                    title={'Show attribute ' + attribute.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAttribute({ id: attribute.id })}
                    title={'Edit attribute ' + attribute.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete attribute ' + attribute.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(attribute.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AttributesList
