import { usePortfolioStore } from '@/store/portfolioStore'

export default function PreviewSection() {
  const portfolios = usePortfolioStore((state) => state.portfolios)

  return (
    <div>
      <h2>รายการ Portfolio ทั้งหมด</h2>
      {portfolios.map((p, index) => (
        <div key={index} className="border p-4 my-2">
          <p>ชื่อ: {p.firstName} {p.lastName}</p>
          <p>อีเมล: {p.email}</p>
          <p>GPA: {p.gpa}</p>
          <img src={p.photoUrl} alt="รูปถ่าย" width={100} />
          <p>ผลงาน:</p>
          <ul>
            {p.works.map((w, i) => (
              <li key={i}><a href={w} target="_blank">{w}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}