import { defer } from '@defer/client'

import { createThought } from 'src/services/thought/thought'

// a background function must be `async`
async function helloWorld(input) {
  console.log('helloWorld in background input value:', input)
  const latestThought = await createThought({ input })
  console.log('latestThought in background', latestThought)
  return latestThought
}

// the function must be wrapped with `defer()` and exported as default
export default defer(helloWorld)
