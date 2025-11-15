import { SelectScrollable } from "@/Components/select/scrollable";
import { SelectScrollableKelas } from "@/Components/select/scrollable-kelas";
import DemoPage from "@/Components/table/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import SidebarLayout from "@/layout";
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import { Plus } from "lucide-react";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import DataInput from "@/Components/InputData";

export default function DataAbsensi() {
    const [input, setInput] = useState(false)
    const [open, setOpen] = useState(false)

    const handleConfirm = () => {
        setOpen(false)

        setTimeout(() => {
            setInput(false)
        }, 200);
    }

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


                    {!input ? (
                        <Button variant="secondary" onClick={() => setInput(true)}>
                            <Plus />
                            Input Kehadiran
                        </Button>
                    ) : (
                        <Button variant="secondary" onClick={() => setOpen(true)}>
                            <Plus />
                            Konfirmasi Kehadiran
                        </Button>
                    )}
                </div>

                {input ? (
                    <>
                        <div className="flex justify-between items-center gap-5 mt-5">
                            <div className="flex gap-5">
                                <SelectScrollable />
                                <SelectScrollableKelas />
                            </div>
                        </div>
                        <DataInput />

                    </>
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

                <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Konfirmasi Kehadiran</AlertDialogTitle>
                            <AlertDialogDescription>
                                Apakah datanya sudah benar?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleConfirm}>
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </SidebarLayout >
    )
}