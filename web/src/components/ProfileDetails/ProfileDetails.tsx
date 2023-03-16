import { MinusSmallIcon } from '@heroicons/react/24/outline'
import type {
  DeleteAttributeMutationVariables,
  FindProfileById,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AddAttribute from '../AddAttribute/AddAttribute'

const DELETE_ATTRIBUTE_MUTATION = gql`
  mutation DeleteAttributeMutation($id: Int!) {
    deleteAttribute(id: $id) {
      id
    }
  }
`

interface Props {
  profile: NonNullable<FindProfileById['profile']>
}

const ProfileDetails = ({ profile }: Props) => {
  const [deleteAttribute, loading] = useMutation(DELETE_ATTRIBUTE_MUTATION, {
    onCompleted: () => {
      toast.success('Attribute deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: ['FindProfileByIdProfilePage'],
  })

  const onDeleteClick = (id: DeleteAttributeMutationVariables['id'], e) => {
    e.currentTarget.parentElement.classList.add('hidden')
    deleteAttribute({ variables: { id } })
  }
  console.log(loading)
  return (
    <div>
      <div className="group/menu mb-2">
        {
          //map out values from profile.attributes
          profile.attributes.map((attribute) => {
            return (
              <div key={attribute.id}>
                <p className="group text-sm text-white">
                  {attribute.attribute}

                  <button
                    onClick={(e) => {
                      onDeleteClick(attribute.id, e)
                    }}
                  >
                    <MinusSmallIcon className="invisible ml-[2px] inline h-5 w-5 group-hover:visible" />
                  </button>
                </p>
              </div>
            )
          })
        }
        <AddAttribute profile={profile} />
      </div>
      {/* <p className="block text-sm font-medium text-gray">
        Share a post to emulate:
      </p> */}
      {/* <p className="group text-sm text-white">
        {
          //map out values from profile.prompts
          profile.prompts.map((prompt) => {
            return <div key={prompt.id}>{prompt.prompt}</div>
          })
        }
        <p className="invisible text-sm font-medium text-gray group-hover:visible">
          Edit
        </p>
      </p> */}
    </div>
  )
}

export default ProfileDetails
