import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
  CheckboxField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { QUERY as PostsQuery } from 'src/components/PostsCell'

const CREATE = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      body
      user
      manualPost
      usedAsPost
      whenWillPost
    }
  }
`

interface FormValues {
  user: string
  comment: string
}

const PostBox = () => {
  const { currentUser } = useAuth()
  const [createPost, { loading, error }] = useMutation(CREATE, {
    refetchQueries: [{ query: PostsQuery }],
  })

  const onSubmit: SubmitHandler<FormValues> = (input: FormValues) => {
    input.user = currentUser.id
    createPost({ variables: { input } })
  }

  return (
    <div>
      <h3 className="text-lg font-light text-gray-600">Leave a Comment</h3>
      <Form className="mt-4 w-full" onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        <Label
          name="user"
          className="block text-xs font-semibold uppercase text-gray-500"
        >
          User
        </Label>
        <TextField
          name="user"
          className="block w-full rounded border p-1 text-sm "
          validation={{ required: true }}
        />

        <Label
          name="body"
          className="mt-4 block text-xs font-semibold uppercase text-gray-500"
        >
          Comment
        </Label>
        <TextAreaField
          name="body"
          className="block h-24 w-full rounded border p-1 text-sm"
          validation={{ required: true }}
        />
        <Label
          name="manualPost"
          className="block text-xs font-semibold uppercase text-gray-500"
        >
          User
        </Label>
        <CheckboxField name="manualPost"></CheckboxField>

        <Label
          name="usedAsPost"
          className="block text-xs font-semibold uppercase text-gray-500"
        >
          User
        </Label>
        <CheckboxField name="usedAsPost"></CheckboxField>

        {/* <DateField name="whenWillPost"></DateField> */}

        <Submit
          disabled={loading}
          className="mt-4 block rounded bg-blue-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white disabled:opacity-50"
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default PostBox
