export default function addZero(value) {
  let res = value

  if (value < 10) {
    res = '0' + value
  }

  return res 
}
