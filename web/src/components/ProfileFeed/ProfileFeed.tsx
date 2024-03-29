// import type { PostsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

// import { useAuth } from 'src/auth'

import Time from '../Time/Time'

const ProfileFeed = ({ posts }) => {
  console.log(posts)
  // const { userMetadata } = useAuth()
  return (
    <div>
      <ul className="divide-gray-200">
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              className="z-10 border-b border-gray-dark py-3 px-4"
            >
              <div className="flex space-x-3 overflow-hidden">
                <img
                  className="mt-1 h-12 w-12 rounded-full"
                  src={post.profileImageUrl}
                  alt=""
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-center ">
                    <Link to={routes.profilepage({ name: post.firstName })}>
                      <h3 className="text-sm font-semibold text-white">
                        {post.firstName} {post.lastName}
                      </h3>
                    </Link>
                    <p className="text-gray-400 pl-1 text-sm text-gray">
                      • <Time time={post.createdAt} />
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm text-white">
                    {post.body}
                  </p>

                  {/* <div className=" mt-2 flex justify-between space-x-8 border-b border-gray-dark pt-1 pb-2"> */}
                  <div className=" mt-2 flex justify-between space-x-8 pt-1 pb-2">
                    <div className="flex space-x-6">
                      <span className="inline-flex items-center text-sm text-gray">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                        >
                          {/* <HeartIcon className="h-5 w-5 " aria-hidden="true" /> */}
                          {/* <span>{post.reactions.count}</span> */}
                          <span className="sr-only">likes</span>
                        </button>
                      </span>
                      <span className="inline-flex items-center text-sm text-gray">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                        >
                          {/* <ChatBubbleLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          /> */}
                          {/* <span>{post.replies.count}</span> */}
                          <span className="sr-only">replies</span>
                        </button>
                      </span>
                      {/* <span className="inline-flex items-center text-sm text-gray">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                      >
                        <ArrowPathRoundedSquareIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>{post.meta.repost.count}</span>
                        <span className="sr-only">repost</span>
                      </button>
                    </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProfileFeed
