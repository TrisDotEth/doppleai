import { useEffect } from 'react'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const CREATE = gql`
  mutation CreateThoughtMutation($input: CreateThoughtInput!) {
    createThought(input: $input) {
      body
    }
  }
`

export function useGenerateThought() {
  const { currentUser } = useAuth()

  useEffect(() => {
    think()
  }, [])

  const [createThought, { data, error }] = useMutation(CREATE)

  const think = () => {
    const input = {}
    input.user = currentUser.id
    input.reply = null
    createThought({ variables: { input } })
  }

  // if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`
  if (data) return data
  return null
}
