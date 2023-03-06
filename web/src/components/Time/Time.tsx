import TimeAgo from 'javascript-time-ago'
// English.
import en from 'javascript-time-ago/locale/en'

const Time = (time) => {
  //TODO Could the time code be moved to it's own helper?
  TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo('en-US')
  const date = new Date(time.time)

  const timeElapsed = Date.now() - date.getTime()
  const timeAgoValue = timeAgo.format(Date.now() - timeElapsed, 'mini')
  return <span>{timeAgoValue}</span>
}

export default Time
