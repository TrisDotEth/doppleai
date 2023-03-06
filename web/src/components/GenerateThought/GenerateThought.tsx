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

const GenerateThought = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    think()
  }, [])

  const [createThought, { data, loading, error }] = useMutation(CREATE)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const think = () => {
    const input = {}
    input.user = currentUser.id
    input.reply = null
    createThought({ variables: { input } })
  }
  // console.log(data)

  return null
}

export default GenerateThought
