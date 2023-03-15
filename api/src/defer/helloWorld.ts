import { defer } from '@defer/client'

import { db } from 'src/lib/db'

// a background function must be `async`
async function helloWorld() {
  const latestThought = db.thought.findFirst()
  console.log('latestThought in background', latestThought)
  return latestThought
}

// the function must be wrapped with `defer()` and exported as default
export default defer(helloWorld)
