import { SelectScrollable } from "@/Components/select/scrollable";
import { SelectScrollableKelas } from "@/Components/select/scrollable-kelas";
import DemoPage from "@/Components/table/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import SidebarLayout from "@/layout";
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import { Plus } from "lucide-react";
import { useState } from "react";

export default function DataAbsensi() {
    const [input, setInput] = useState(false)

    return (
        <SidebarLayout>
            <div>
                <Breadcrumb className="mt-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Data Absensi</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>


                <div className="flex items-center justify-between mt-5">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
                        Data Kehadiran Hari Ini
                    </h4>

                    <Button variant="secondary" onClick={() => setInput(!input)}>
                        <Plus />
                        {input ? "Konfirmasi Kehadiran" : "Input Kehadiran"}
                    </Button>
                </div>

                {input ? (
                    <p>takde</p>          // ini halaman input nanti
                ) : (
                    <>
                        <div className="flex justify-between items-center gap-5 mt-5">
                            <div className="flex gap-5">
                                <SelectScrollable />
                                <SelectScrollableKelas />
                            </div>
                            <Input type="search" placeholder="Cari" />
                        </div>

                        <DemoPage />
                    </>
                )}

            </div>
        </SidebarLayout>
    )
}