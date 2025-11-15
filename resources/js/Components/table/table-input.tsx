import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/Components/ui/select"
import { ColumnDef } from "@tanstack/react-table"
import { Payment } from "./columns"
import { Checkbox } from "@/Components/ui/checkbox"


export const inputData: ColumnDef<Payment>[] = [
     {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    {
        accessorKey: "nis",
        header: "Nis",
        cell: ({ row }) => {
            const value = row.original.nis

            return (
                <Select
                    defaultValue={String(value)}
                    onValueChange={(v) => {
                        const newNis = Number(v)
                    }}
                >
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Pilih NIS" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="11221">11221</SelectItem>
                        <SelectItem value="88771">88771</SelectItem>
                        <SelectItem value="55188">55188</SelectItem>
                    </SelectContent>
                </Select>
            )
        },
    },
    {
        accessorKey: "nama",
        header: "Nama",
        cell: ({ row }) => {
            const value = row.original.nama

            return (
                <Select
                    defaultValue={value}
                >
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Bintang">Bintang</SelectItem>
                        <SelectItem value="izin">Yudha</SelectItem>
                        <SelectItem value="sakit">Putra</SelectItem>
                        <SelectItem value="alfa">Purnomo</SelectItem>
                    </SelectContent>
                </Select>
            )
        },
    },
    {
        accessorKey: "kelas",
        header: "Kelas",
        cell: ({ row }) => {
            const value = row.original.kelas

            return (
                <Select
                    defaultValue={value}
                >
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="XII RPL">12 RPL</SelectItem>
                        <SelectItem value="izin">11 RPL</SelectItem>
                        <SelectItem value="sakit">10 RPl</SelectItem>
                    </SelectContent>
                </Select>
            )
        },
    },
    {
        accessorKey: "kehadiran",
        header: "Keterangan",
        cell: ({ row }) => {
            const value = row.original.kehadiran

            return (
                <Select
                    defaultValue={value}
                >
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="hadir">Hadir</SelectItem>
                        <SelectItem value="sakit">Sakit</SelectItem>
                        <SelectItem value="izin">Izin</SelectItem>
                        <SelectItem value="alfa">Alfa</SelectItem>
                    </SelectContent>
                </Select>
            )
        },
    },
]
