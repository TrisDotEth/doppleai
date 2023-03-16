
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag,  } from 'src/lib/formatters'

import type { DeletePromptMutationVariables, FindPromptById } from 'types/graphql'

const DELETE_PROMPT_MUTATION = gql`
  mutation DeletePromptMutation($id: Int!) {
    deletePrompt(id: $id) {
      id
    }
  }
`

interface Props {
  prompt: NonNullable<FindPromptById['prompt']>
}

const Prompt = ({ prompt }: Props) => {
  const [deletePrompt] = useMutation(DELETE_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('Prompt deleted')
      navigate(routes.prompts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePromptMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete prompt ' + id + '?')) {
      deletePrompt({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Prompt {prompt.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{prompt.id}</td>
            </tr><tr>
              <th>Prompt</th>
              <td>{prompt.prompt}</td>
            </tr><tr>
              <th>Is use</th>
              <td>{checkboxInputTag(prompt.isUse)}</td>
            </tr><tr>
              <th>Disabled at</th>
              <td>{timeTag(prompt.disabledAt)}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(prompt.createdAt)}</td>
            </tr><tr>
              <th>Profile id</th>
              <td>{prompt.profileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPrompt({ id: prompt.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(prompt.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Prompt
