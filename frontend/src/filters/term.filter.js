export default function courses(value) {
  const monthCount = value

  function getPlural(number, word) {
    return number === 1 && word.one || (number > 4 && word.other || word.twoFour)
  }

  let months = { one: 'місяць', twoFour: 'місяці', other: 'місяців' }
  let years = { one: 'рік', twoFour: 'роки', other: 'років' }
  let m = monthCount % 12
  let y = Math.floor(monthCount / 12)
  let result = []

  y && result.push(y + ' ' + getPlural(y, years))
  m && result.push(m + ' ' + getPlural(m, months))
  return result.join(' ')
}
