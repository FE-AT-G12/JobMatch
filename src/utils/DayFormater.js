import dayjs from "dayjs"
export const dateFormatter = (date) => {
    const [day, month, year] = date.split('/')
    const formatDate =  `${year}-${month}-${day}`
    
    return dayjs(formatDate)
}