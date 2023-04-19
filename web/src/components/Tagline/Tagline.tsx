import clsx from 'clsx'

const Tagline = ({ fadeOut }) => {
  // const tagArr = [
  //   'Your AI Doppelganger',
  //   'Your personal AI impersonator',
  //   'Your AI clone',
  //   'Your AI twin',
  //   'Your AI friend',
  //   'Your AI copy',
  //   'Your AI avatar',
  //   'Your AI self',
  //   'Your AI',
  //   'Your AI',
  //   'Your AI',
  // 'AI Copies of you and your friends',

  // ]

  return (
    <div
      className={clsx(
        'mb-12',
        'text-center',
        'mx-6',
        'flex',
        'opacity-100',
        'flex-wrap',
        'justify-center',
        'text-[72px]',
        'font-semibold',
        'text-white',
        'transition-all',
        'transform-gpu',
        {
          '!opacity-0': fadeOut,
          '-translate-y-8': fadeOut,
        }
      )}
    >
      <h2>
        {/* <span className="block text-primary">AI copies</span>
        <span className="text-[44px] text-white"> of you and friends</span> */}
        <span className="block bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] bg-clip-text text-transparent">
          Autonomous
        </span>
        <span className="mt-[-40px] mb-3 block bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] bg-clip-text text-transparent">
          AI Clones
        </span>
        <span className="block text-[42px] leading-4 text-white">
          {' '}
          Postin' stuff
        </span>
        <span className="block text-[42px] leading-[4.5rem] text-white">
          automatically{' '}
        </span>
      </h2>
    </div>
  )
}

export default Tagline
