import { defer } from '@defer/client'

import { postReadyThoughts, refreshThought } from 'src/services/thought/thought'
// import { createThought } from 'src/services/thought/thought'

// a background function must be `async`
const helloWorld = async () => {
  console.log('helloWorld running')
  const postReadyThought = await postReadyThoughts()
  console.log('postReadyThoughts fired, return:', postReadyThought)

  // const refreshThoughts = await refreshThought()
  // console.log('refreshThoughts fired, return:', refreshThoughts)
  // const latestThought = await createThought({ input })
  // console.log('latestThought in background', latestThought)
  // return latestThought
}

// the function must be wrapped with `defer()` and exported as default
export default defer.cron(helloWorld, '15 * * * *')
