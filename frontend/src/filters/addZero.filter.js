export default function addZero(value) {
  if (!value) return ''
  
  let res = value

  if (value < 10) {
    res = `0${value}`
  }

  return res
}
