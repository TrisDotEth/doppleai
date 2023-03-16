import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Prompt/PromptsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type { DeletePromptMutationVariables, FindPrompts } from 'types/graphql'

const DELETE_PROMPT_MUTATION = gql`
  mutation DeletePromptMutation($id: Int!) {
    deletePrompt(id: $id) {
      id
    }
  }
`

const PromptsList = ({ prompts }: FindPrompts) => {
  const [deletePrompt] = useMutation(DELETE_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('Prompt deleted')
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

  const onDeleteClick = (id: DeletePromptMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete prompt ' + id + '?')) {
      deletePrompt({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Prompt</th>
            <th>Is use</th>
            <th>Disabled at</th>
            <th>Created at</th>
            <th>Profile id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt) => (
            <tr key={prompt.id}>
              <td>{truncate(prompt.id)}</td>
              <td>{truncate(prompt.prompt)}</td>
              <td>{checkboxInputTag(prompt.isUse)}</td>
              <td>{timeTag(prompt.disabledAt)}</td>
              <td>{timeTag(prompt.createdAt)}</td>
              <td>{truncate(prompt.profileId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.prompt({ id: prompt.id })}
                    title={'Show prompt ' + prompt.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPrompt({ id: prompt.id })}
                    title={'Edit prompt ' + prompt.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete prompt ' + prompt.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(prompt.id)}
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

export default PromptsList
