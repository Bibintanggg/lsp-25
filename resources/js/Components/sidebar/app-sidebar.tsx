
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavProjects } from "@/Components/sidebar/nav-projects"
import { NavUser } from "@/Components/sidebar/nav-user"
import { TeamSwitcher } from "@/Components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/Components/ui/sidebar"
import { usePage } from "@inertiajs/react"

const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: Frame,
    },
    {
      name: "Data Absensi",
      url: "/admin/data-absensi",
      icon: PieChart,
    },
    {
      name: "Data Siswa",
      url: "#",
      icon: Map,
    },
    {
      name: "Pengguna",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { props: page } = usePage()
  const { auth } = page

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        {auth.user ? (
          <NavUser user={{
            name: auth.user.name,
            email: auth.user.email,
          }}/>
        ) : (
          <p>hello</p>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
