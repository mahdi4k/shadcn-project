"use client"

import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    active?: boolean
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
       
        <SidebarMenu className="gap-4 mt-5">
          {items.map((item) => (
            <SidebarMenuItem  key={item.title}>
              <SidebarMenuButton isActive={item.active} iconSize="xl" size={'lg'} tooltip={item.title}>
                {item.icon && <item.icon />}
                <span className="text-base">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
