"use client";
import { usePortfolioStore } from "../store/portfolioStore";

export default function TableSection() {
  const data = usePortfolioStore((state) => state.data);

  return (
    <table className="w-full border mt-4">
      <thead>
        <tr>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>GPA</th>
          <th>เหตุผล</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.name}</td>
            <td>{d.surname}</td>
            <td>{d.gpa}</td>
            <td>{d.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}