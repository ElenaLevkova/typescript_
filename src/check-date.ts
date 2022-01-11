export function getCheckDates (dateIn?: string, dateOut?: string) {
  let day = new Date()
  const checkInDateMin = makeDate(day.getFullYear(), (day.getMonth() + 1 ), day.getDate())

  day.setDate(day.getDate() + 1)
  const nextDateNow = makeDate(day.getFullYear(), (day.getMonth() + 1 ), day.getDate())
  const checkInDate = dateIn ? dateIn : nextDateNow

  day.setDate(day.getDate() + 2)
  const dateNowOut = makeDate(day.getFullYear(), (day.getMonth() + 1 ), day.getDate())
  const checkOutDate = dateOut ? dateOut : dateNowOut

  day = new Date()
  day.setMonth(day.getMonth() + 2)
  day.setDate(0)
  const checkInDateMax = makeDate(day.getFullYear(), (day.getMonth() + 1 ), day.getDate())

  return {
    checkInDateMin,
    checkInDate,
    checkOutDate,
    checkInDateMax,
    nextDateNow
  }
}  

export function makeDate (year, month, day) {
  return year.toString() + '-' + zeroPlus(month.toString()) + '-' + zeroPlus(day.toString())
}
  
function zeroPlus (value) {
  if (+value < 10) return value = '0'+ value
  else return value
}
