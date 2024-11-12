import dayjs from 'dayjs'
export const dateFormatter = (date) => {
  const [day, month, year] = date.split(/[-\/]/)
  const formatDate = `${year}-${month}-${day}`

  return dayjs(formatDate)
}

export const validateDate = (_, value) => {
  if (value && isNaN(new Date(value).getTime())) {
    return Promise.reject(new Error('Invalid date format!'))
  }
  return Promise.resolve()
}

// Get the current date in yyyy-mm-dd format
export const getCurrentDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
