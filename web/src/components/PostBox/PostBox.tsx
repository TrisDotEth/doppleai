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
import { useLocation } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { QUERY as PostsQuery } from 'src/components/PostsCell'
import { QUERY as UserPostsQuery } from 'src/components/ProfilePostsCell'
import { QUERY as ThoughtQuery } from 'src/components/ThoughtCell'

import GenerateThought from '../GenerateThought/GenerateThought'
import RefreshThought from '../RefreshThought/RefreshThought'

const CREATE = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      body
      user
      manualPost
      usedAsPost
    }
  }
`

interface FormValues {
  user: string
  comment: string
}

const PostBox = ({ thought }) => {
  // const refetchQueries = [{ query: PostsQuery }, { query: thought }]
  // if (pathname !== '') {
  //   refetchQueries.push({
  //     query: userPosts,
  //     variables: { firstName: pathname.slice(1) },
  //   })
  // }

  const { pathname } = useLocation()
  const { currentUser } = useAuth()
  const [createPost, { loading, error }] = useMutation(CREATE, {
    refetchQueries: [
      { query: UserPostsQuery, variables: { firstName: pathname.slice(1) } },
      { query: ThoughtQuery },
      { query: PostsQuery },
    ],
  })

  const formLoading = loading
  console.log(loading)
  const onSubmit: SubmitHandler<FormValues> = (input: FormValues) => {
    input.user = currentUser.id
    currentUser
    input.usedAsPost = false
    input.manualPost = false
    input.body = thought.body
    createPost({ variables: { input } })
  }

  return (
    // <div className="z-10 mx-auto block w-96 border-y bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd]  py-3 px-4 text-center">
    <div className="z-10 mx-auto block w-96 border-y border-gray  py-3 px-4 text-center">
      {/* Generate the latest thought if not already made */}
      <GenerateThought />
      <div className="mb-2">
        <img
          className=" mx-1 mr-2 inline-block h-7 w-7 rounded-full drop-shadow-xl"
          alt="Profile"
          // @ts-expect-error Hardcoded for now, should move to own DB? TODO
          src={currentUser.profileImageUrl}
        ></img>
        <span className="text-gray">I'll post this in 5 mins</span>
      </div>

      <h2>{thought.body}</h2>
      {/* <ThoughtCell /> */}
      {/* <h3 className="text-gray-600 text-lg font-light">Leave a Comment</h3> */}
      <Form className="mt-4" onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        <div className="inline-flex items-center justify-center">
          <RefreshThought />
          <Submit
            disabled={loading}
            className="mb-1 mt-2 inline-flex h-[34px] w-52 items-center justify-center rounded-lg bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] px-4 text-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {formLoading ? 'Loading' : 'Post now'}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostBox
