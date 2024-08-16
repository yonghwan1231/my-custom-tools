export const formatPhoneNumber = (value: number | string) => {
  if (!value) return ''
  if (typeof value === 'number') value = value.toString()
  const phoneNumber = value.replace(/-/g, '')
  let formattedPhoneNumber = ''
  for (let i = 0; i < phoneNumber.length; i++) {
    if (i === 3 || i === 7) {
      formattedPhoneNumber += '-'
    }
    formattedPhoneNumber += phoneNumber[i]
  }
  return formattedPhoneNumber
}
