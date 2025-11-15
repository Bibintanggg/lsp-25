import { useEffect, useState } from "react"
import { Payment } from "@/Components/table/columns"
import { inputData } from "./table/table-input"
import { DataTable } from "@/Components/table/data-table"

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

export default function DataInput() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div className="container w-full py-10">
      <DataTable columns={inputData} data={data} />
    </div>
  )
}