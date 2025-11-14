"use client"

import { ColumnDef } from "@tanstack/react-table"
export type Payment = {
  id: string
  nis: number
  nama: string
  kelas: string
  kehadiran: "hadir" | "sakit" | "izin" | "alfa"
  status: "terlambat" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "nis",
    header: "Nis",
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "kelas",
    header: "Kelas",
  },
  {
    accessorKey: "kehadiran",
    header: "Kehadiran",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]