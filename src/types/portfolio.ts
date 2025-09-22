export interface Portfolio {
  firstName: string
  lastName: string
  address: string
  phone: string
  email: string
  photoUrl: string
  gpaUrl: string
  gpa: number // ✅ เพิ่มตรงนี้
  talents: string
  motivation: string
  works: string[]
}