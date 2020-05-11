export default function dateFormat(value) {
  const date = value

  const day = date.getDate()
  const month = (date.getMonth() < 10 && '0') + date.getMonth()
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}
