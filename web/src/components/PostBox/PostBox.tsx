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
  const formLoading = loading
  debugger;
  console.log(loading)
  const onSubmit: SubmitHandler<FormValues> = (input: FormValues) => {
    input.user = currentUser.id
    input.usedAsPost = false
    input.manualPost = false
    input.body = 'dsfg'
    createPost({ variables: { input } })
  }

  return (
    <div className="mx-auto block w-96 text-center">
      {/* <h3 className="text-gray-600 text-lg font-light">Leave a Comment</h3> */}
      <Form className="mt-4" onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        {/* <Label
          name="user"
          className="text-gray-500 block text-xs font-semibold uppercase"
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
          className="text-gray-500 mt-4 block text-xs font-semibold uppercase"
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
          className="text-gray-500 block text-xs font-semibold uppercase"
        >
          User
        </Label>
        <CheckboxField name="manualPost"></CheckboxField>

        <Label
          name="usedAsPost"
          className="text-gray-500 block text-xs font-semibold uppercase"
        >
          User
        </Label>
        <CheckboxField name="usedAsPost"></CheckboxField> */}

        {/* <DateField name="whenWillPost"></DateField> */}

        <Submit
          disabled={loading}
          className="mb-1 mt-2 inline-flex h-[34px] w-52 items-center justify-center rounded-lg bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] px-4 text-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {formLoading ? 'Loading' : 'Post now'}
        </Submit>
      </Form>
    </div>
  )
}

export default PostBox
