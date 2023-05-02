import { useMutation } from '@redwoodjs/web'

const CHECK_THOUGHTS_TO_POST = gql`
  mutation postReadyThoughts {
    postReadyThoughts {
      succeeded
    }
  }
`

const DEVpostReadyThoughts = () => {
  const [checkThoughtsToPost, { loading, error }] = useMutation(
    CHECK_THOUGHTS_TO_POST
  )

  const handleClick = async () => {
    try {
      const { data } = await checkThoughtsToPost()
      console.log(data, 'data')
      console.log(data.postReadyThoughts.succeeded, 'thoughts updated')
    } catch (error) {
      console.error('Error checking thoughts to post:', error)
    }
  }

  return (
    <button onClick={handleClick} className="text-white" disabled={loading}>
      Check Thoughts to Post
    </button>
  )
}

export default DEVpostReadyThoughts
