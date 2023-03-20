import { defer } from '@defer/client'

import { createThought } from 'src/services/thought/thought'

// a background function must be `async`
const helloWorld = async () {
  console.log('helloWorld in background input value:')
  // const latestThought = await createThought({ input })
  // console.log('latestThought in background', latestThought)
  // return latestThought
}

// the function must be wrapped with `defer()` and exported as default
export default defer.cron(helloWorld, '0 * * * *')
