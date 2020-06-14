export default function dateFormat(value) {
  const date = value

  const day = date.getDate()
  const month = (date.getMonth() < 11 && '0') + (date.getMonth() + 1)
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}
