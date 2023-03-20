export const randomTime = () => {
  // Get the current time
  const now = new Date()

  // Set the minimum and maximum times (in milliseconds)
  const minTime = now.getTime()
  const maxTime = now.getTime() + 24 * 60 * 60 * 1000 // 24 hours in milliseconds

  // Generate a random time between the minimum and maximum times
  const randomTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime

  // Create a new Date object from the random time
  const randomDate = new Date(randomTime)

  return randomDate
}
