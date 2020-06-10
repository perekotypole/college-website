export default function courses(value) {
  const monthCount = value

  function getPlural(number, word) {
    return number === 1 && word.one || (number > 4 && word.other || word.twoFour)
  }

  const months = { one: 'місяць', twoFour: 'місяці', other: 'місяців' }
  const years = { one: 'рік', twoFour: 'роки', other: 'років' }
  const m = monthCount % 12
  const y = Math.floor(monthCount / 12)
  const result = []

  y && result.push(`${y} ${getPlural(y, years)}`)
  m && result.push(`${m} ${getPlural(m, months)}`)
  return result.join(' ')
}
