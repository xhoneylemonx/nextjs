// src/components/TableSection.tsx
"use client"

import { Portfolio } from '@/types/portfolio'
import { usePortfolioStore } from '@/store/portfolioStore'

export function TableSection() {
  const portfolios = usePortfolioStore((state: { portfolios: Portfolio[] }) => state.portfolios)

  return (
    <div className="space-y-4">
      {portfolios.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีข้อมูลที่เพิ่ม</p>
      ) : (
        portfolios.map((p: Portfolio, index: number) => (
          <div key={index} className="border p-4 rounded shadow-sm bg-white">
            <p>ชื่อ: {p.firstName} {p.lastName}</p>
            <p>ที่อยู่: {p.address}</p>
            <p>เบอร์โทร: {p.phone}</p>
            <p>อีเมล: {p.email}</p>
            <p>GPA: <a href={p.gpaUrl} target="_blank" className="text-blue-600 underline">ดูใบรายงานผล</a></p>
            <p>ความสามารถพิเศษ: {p.talents}</p>
            <p>เหตุผลในการสมัคร: {p.motivation}</p>
            <img src={p.photoUrl} alt="รูปถ่าย" width={100} className="my-2" />
            <p>ผลงาน:</p>
            <ul className="list-disc pl-5">
              {p.works.map((w: string, i: number) => (
                <li key={i}><a href={w} target="_blank" className="text-blue-600 underline">{w}</a></li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}