import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const OneofusPage = () => {
  const { signUp } = useAuth()
  return (
    <>
      <MetaTags title="Oneofus" description="Oneofus page" />

      <h1>OneofusPage</h1>
      <div className="flex justify-center">
        <button
          className="mb-1 mt-2 inline-flex h-[34px] w-52 items-center justify-center rounded-lg bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] px-4 text-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
          onClick={signUp}
        >
          Sign up with Facebook
        </button>
        {/* <button className="ml-5 text-white" onClick={logIn}>
              sign in
            </button> */}
        {/* <SignInButton mode="modal" /> */}
      </div>
    </>
  )
}

export default OneofusPage
