"use client"

import { useForm } from "react-hook-form"
import { Portfolio } from "@/types/portfolio"
import { usePortfolioStore } from "@/store/portfolioStore"

export function FormSection() {
  const { register, handleSubmit, reset } = useForm<Portfolio>()
  const addPortfolio = usePortfolioStore((state) => state.addPortfolio)

  const onSubmit = (data: Portfolio) => {
    addPortfolio(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("firstName", { required: true })} placeholder="ชื่อ" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("lastName", { required: true })} placeholder="นามสกุล" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("address")} placeholder="ที่อยู่" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("phone")} placeholder="เบอร์โทรศัพท์" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("email")} placeholder="อีเมล" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("photoUrl")} placeholder="ลิงก์รูปถ่าย" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("gpaUrl")} placeholder="ลิงก์ใบรายงานผล GPA" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <textarea {...register("talents")} placeholder="ความสามารถพิเศษ" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <textarea {...register("motivation")} placeholder="เหตุผลในการสมัคร" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("works.0")} placeholder="ลิงก์ผลงานที่ 1" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />
      <input {...register("works.1")} placeholder="ลิงก์ผลงานที่ 2" className="w-full p-3 border border-indigo-300 rounded-md shadow-sm" />

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-200 block mx-auto"
      >
        เพิ่ม Portfolio
      </button>
    </form>
  )
}