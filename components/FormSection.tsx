"use client";
import { useState } from "react";
import { usePortfolioStore } from "../store/portfolioStore";

export default function FormSection() {
  const [form, setForm] = useState({ name: "", surname: "", gpa: 0, reason: "" });
  const addData = usePortfolioStore((state) => state.addData);

  const handleSubmit = () => {
    if (!form.name || !form.surname) return alert("กรุณากรอกข้อมูลให้ครบ");
    addData({ ...form, subjects: [], skills: [], targetFaculty: "", targetUniversity: "" });
    setForm({ name: "", surname: "", gpa: 0, reason: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">แบบฟอร์ม Portfolio</h2>
      <input placeholder="ชื่อ" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="นามสกุล" value={form.surname} onChange={(e) => setForm({ ...form, surname: e.target.value })} />
      <input type="number" placeholder="GPA" value={form.gpa} onChange={(e) => setForm({ ...form, gpa: parseFloat(e.target.value) })} />
      <textarea placeholder="เหตุผลที่สมัคร" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
      <button onClick={handleSubmit}>บันทึกข้อมูล</button>
    </div>
  );
}