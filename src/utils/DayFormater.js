import dayjs from 'dayjs'
export const dateFormatter = (date) => {
  const [day, month, year] = date.split('/')
  const formatDate = `${year}-${month}-${day}`
  return dayjs(formatDate)
}

export const dateJsToStringFormatter = (date) => {
  const day = String(date.$D).length === 2 ? date.$D : `0${date.$D}`
  const month =
    String(date.$M).length === 2 ? Number(date.$M) + 1 : `0${+date.$M + 1}`
  const year = date.$y
  const formatedDate = `${year}-${month}-${day}`
  return formatedDate
}

export const timeJsToStringFormatter = (time) => {
  const formatedTime = String(time.$d).slice(16, 21)

  return formatedTime
}

export const calculateTimeSincePosted = (postedDate) => {
  const currentDate = new Date() // Get current date and time
  const postedTime = new Date(postedDate) // Convert the posted date string to a Date object

  const diffInMilliseconds = currentDate - postedTime // Calculate the difference in milliseconds
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60))
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  if (diffInMinutes < 60) {
    return `${diffInMinutes} phút trước` // If less than 60 minutes, return minutes
  } else if (diffInHours < 24) {
    return `${diffInHours} giờ trước` // If less than 24 hours, return hours
  } else {
    return `${diffInDays} ngày trước` // If more than 24 hours, return days
  }
}
