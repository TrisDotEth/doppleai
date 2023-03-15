import { defer } from '@defer/client'

import { db } from 'src/lib/db'

// a background function must be `async`
async function helloWorld(name: string) {
  const latestThought = await db.thought.findFirst()
  return new Promise((resolve) => {
    console.log('latestThought in background', latestThought)

    setTimeout(() => {
      console.log(`Hello ${name}!`)
      resolve('done')
    }, 15000)
  })
}

// the function must be wrapped with `defer()` and exported as default
export default defer(helloWorld)
