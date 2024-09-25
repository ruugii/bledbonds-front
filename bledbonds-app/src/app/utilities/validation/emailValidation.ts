export default function emailValidation(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}