import { ArrowPathIcon } from '@heroicons/react/24/outline'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { QUERY as thought } from 'src/components/ThoughtCell'

const CREATE = gql`
  mutation RefreshThoughtMutation($input: RefreshThoughtInput!) {
    refreshThought(input: $input) {
      body
    }
  }
`

const RefreshThought = () => {
  const { currentUser } = useAuth()
  const [refreshThought, { loading, error }] = useMutation(CREATE, {
    refetchQueries: [
      // { query: userPosts, variables: { firstName: pathname.slice(1) } },
      { query: thought },
    ],
  })

  // if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const refresh = () => {
    const input = {}
    input.user = currentUser.id
    input.reply = null
    refreshThought({ variables: { input } })
  }

  return (
    <div>
      <button onClick={refresh}>
        <ArrowPathIcon className="mr-2 mt-1 h-6 w-6 text-white" />
      </button>
    </div>
  )
}

export default RefreshThought
