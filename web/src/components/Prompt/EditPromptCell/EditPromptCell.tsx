import type { EditPromptById, UpdatePromptInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PromptForm from 'src/components/Prompt/PromptForm'

export const QUERY = gql`
  query EditPromptById($id: Int!) {
    prompt: prompt(id: $id) {
      id
      prompt
      isUse
      disabledAt
      createdAt
      profileId
    }
  }
`
const UPDATE_PROMPT_MUTATION = gql`
  mutation UpdatePromptMutation($id: Int!, $input: UpdatePromptInput!) {
    updatePrompt(id: $id, input: $input) {
      id
      prompt
      isUse
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

export const Success = ({ prompt }: CellSuccessProps<EditPromptById>) => {
  const [updatePrompt, { loading, error }] = useMutation(
    UPDATE_PROMPT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Prompt updated')
        navigate(routes.prompts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePromptInput,
    id: EditPromptById['prompt']['id']
  ) => {
    updatePrompt({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Prompt {prompt?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PromptForm prompt={prompt} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
