import type {
  DeleteProfileMutationVariables,
  FindProfileById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PROFILE_MUTATION = gql`
  mutation DeleteProfileMutation($id: Int!) {
    deleteProfile(id: $id) {
      id
    }
  }
`

interface Props {
  profile: NonNullable<FindProfileById['profile']>
}

const Profile = ({ profile }: Props) => {
  const [deleteProfile] = useMutation(DELETE_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('Profile deleted')
      navigate(routes.profiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProfileMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete profile ' + id + '?')) {
      deleteProfile({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Profile {profile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{profile.id}</td>
            </tr>
            <tr>
              <th>User</th>
              <td>{profile.user}</td>
            </tr>
            {
              //map out values from profile.attributes
              profile.attributes.map((attribute) => {
                return (
                  <div key={attribute.id}>
                    <tr>
                      <th>AttrId</th>
                      <td>{attribute.id}</td>
                    </tr>
                    <tr>
                      <th>Attributes</th>
                      <td>{attribute.attribute}</td>
                    </tr>
                  </div>
                )
              })
            }
            <tr>
              <th>Created at</th>
              <td>{timeTag(profile.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProfile({ id: profile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(profile.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Profile
