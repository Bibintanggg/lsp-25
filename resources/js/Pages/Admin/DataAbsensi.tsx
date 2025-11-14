import { SelectScrollable } from "@/Components/select/scrollable";
import DemoPage from "@/Components/table/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import SidebarLayout from "@/layout";

export default function DataAbsensi() {
    return (
        <SidebarLayout>
            <div>
                <Breadcrumb className="mt-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
                    Kehadiran Hari Ini
                </h4>
                <SelectScrollable/>
                <DemoPage />
            </div>
        </SidebarLayout>
    )
}