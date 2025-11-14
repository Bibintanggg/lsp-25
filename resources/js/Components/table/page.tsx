import { useEffect, useState } from "react"
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      nis: 11221,
      nama: "Bintang",
      kelas: "XII RPL",
      kehadiran: "hadir",
      status: "terlambat"
    },
    // ...
  ]
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    getData().then(setData)
  })

  return (
    <div className="container w-full py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}