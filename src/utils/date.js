const dateFormat = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let dateTime

  let dateClass = new Date(date)
    , dateDay = (dateClass.getDate() < 10 ? '0' : '') + dateClass.getDate()
    , dateFormat = `${months[dateClass.getMonth()]} ${dateDay}`
    , dateHours = (dateClass.getHours() < 10 ? '0' : '') + dateClass.getHours()
    , dateMinutes = (dateClass.getMinutes() < 10 ? '0' : '') + dateClass.getMinutes()

  dateTime = `${dateFormat} ${dateHours}:${dateMinutes}`

  return dateTime
}

export default dateFormat
