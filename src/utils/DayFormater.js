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
