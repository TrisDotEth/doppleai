import clsx from 'clsx'

const Tagline = ({ fadeOut }) => {
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
          AI copies
        </span>
        <span className="block text-[42px] leading-7 text-white">
          {' '}
          of you and your
        </span>
        <span className="block text-[42px] leading-[3.5rem] text-white">
          friends{' '}
        </span>
      </h2>
    </div>
  )
}

export default Tagline
