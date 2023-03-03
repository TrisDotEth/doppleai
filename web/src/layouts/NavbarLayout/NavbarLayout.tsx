import { useAuth } from 'src/auth'

type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const { isAuthenticated, signUp, logOut, logIn } = useAuth()
  return (
    <>
      {/* <MetaTags title="be:Anyone" description={'be:Anyone'} /> */}
      {/* <span className="fixed top-0 z-50 h-4 w-8 bg-primary-dark text-xs text-white">
        c{currentScrollPosition}
        <br />p{previousScrollPosition}
        <br />
        isShow-{chooseAnyoneOpen ? 't' : 'f'}
      </span> */}
      <div className="mx-auto min-h-full max-w-5xl">
        <header className="sticky top-0 z-10 w-full px-2">
          <div className="flex h-11 justify-between">
            <div className="flex flex-1">
              <div className="flex flex-shrink-0 items-center">
                {/* Check to see if it's not on the home page */}
                {/* {!homepage && (
                  <Link to={routes.home()}>
                    <ArrowSmallLeftIcon className="h-6 w-6 text-white" />
                  </Link>
                )} */}
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="block w-auto pt-2 text-base font-medium text-white">
                  <span style={{ textShadow: '#222 1px 1px 5px' }}>
                    dopple
                  </span>
                  {isAuthenticated &&<span style={{ textShadow: '#222 1px 1px 5px' }}>:Tris</span>}
                  <span>
                    {/* <img
                          className=" mx-1 inline-block h-6 w-6 rounded-full drop-shadow-xl"
                          alt="Profile"
                          // @ts-expect-error Hardcoded for now, should move to own DB? TODO
                          src={anyone.profiles[0].importedData.pfp.url}
                        ></img> */}
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <div className="flex-shrink-0">
                {/* <ConnectWallet /> */}
                {/* <WalletIcon className="h-6 w-6 text-white" /> */}
                {/* Enable Dev mode */}
                {/* <button onClick={() => devMode.setDevMode(!devMode.devMode)}>
                  <SquaresPlusIcon className="h-6 w-6 text-white" />
                </button> */}
                {isAuthenticated ? <button className="text-white" onClick={logOut}>logout</button> : (<div><button className="text-white" onClick={signUp}>sign up</button><button className="text-white ml-5" onClick={logIn}>sign in</button></div>) }
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 bg-black text-white">{children}</main>
      </div>
    </>
  )
}

export default NavbarLayout
