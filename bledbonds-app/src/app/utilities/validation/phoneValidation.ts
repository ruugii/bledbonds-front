export default function phoneValidation(phone: string) {
  return /^\d{9}$/.test(phone)
}