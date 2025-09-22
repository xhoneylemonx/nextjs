import { FormSection } from "@/components/FormSection"
import { TableSection } from "@/components/TableSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-indigo-50 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-700">Portfolio TCAS69 ของ Penelopy 🎓</h1>
        <p className="text-gray-600 mt-2">
          แบบฟอร์มสำหรับนักเรียนที่ต้องการยื่น Portfolio เพื่อสมัครมหาวิทยาลัยในระบบ TCAS69
        </p>
      </header>

      <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">กรอกข้อมูล Portfolio</h2>
        <FormSection />
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">รายการ Portfolio ที่เพิ่มแล้ว</h2>
        <TableSection />
      </section>
    </main>
  )
}