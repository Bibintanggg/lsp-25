import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import AppSidebar from "@/Components/app-sidebar"

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full p-10">
        <SidebarTrigger />
        <div className=" mx-auto">
        {children}
        </div>
      </main>
    </SidebarProvider>
  )
}