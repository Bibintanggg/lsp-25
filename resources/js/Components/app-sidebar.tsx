import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"
import { ChevronUp, Home, User2 } from "lucide-react"
import React from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { usePage } from "@inertiajs/react"

export default function AppSidebar() {
  const {props} = usePage()
  // const user = props.auth.user.name

  const projects = [
    {id: 1, name: "Overview", url: "", icon: <Home/> },
    {id: 2, name: "Overview", url: "", icon: <Home/> },
    {id: 3, name: "Overview", url: "", icon: <Home/> },
    {id: 4, name: "Overview", url: "", icon: <Home/> },
  ]
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-sans mb-1 p-5 font-semibold">Projects</SidebarGroupLabel>
          <hr className="border border-black/20 mt-1 mb-2 rounded-full"/>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild className="text-lg px-4 py-5">
                    <a href={project.url}>
                      {project.icon}
                      <span>{project.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

       <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="text-lg">
                  <SidebarMenuButton>
                    <User2/> 
                    {props.auth.user.name}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}