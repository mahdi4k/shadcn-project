"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useDirection } from "@/components/direction-wrapper";
import { useTranslations } from "next-intl";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { dir } = useDirection();

  const t = useTranslations("Navigation");

  const data = React.useMemo(
    () => ({
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      navMain: [
        {
          title: t("dashboard"),
          url: "#",
          icon: IconDashboard,
        },
        {
          title: t("transactions"),
          url: "#",
          icon: IconListDetails,
        },
        {
          title: t("accounts"),
          url: "#",
          icon: IconListDetails,
          active:true
        },
        {
          title: t("investments"),
          url: "#",
          icon: IconChartBar,
        },
        {
          title: t("credit_cards"),
          url: "#",
          icon: IconFolder,
        },
        {
          title: t("loans"),
          url: "#",
          icon: IconUsers,
        },
      ],
      navClouds: [
        {
          title: "Capture",
          icon: IconCamera,
          isActive: true,
          url: "#",
          items: [
            {
              title: "Active Proposals",
              url: "#",
            },
            {
              title: "Archived",
              url: "#",
            },
          ],
        },
        {
          title: "Proposal",
          icon: IconFileDescription,
          url: "#",
          items: [
            {
              title: "Active Proposals",
              url: "#",
            },
            {
              title: "Archived",
              url: "#",
            },
          ],
        },
        {
          title: "Prompts",
          icon: IconFileAi,
          url: "#",
          items: [
            {
              title: "Active Proposals",
              url: "#",
            },
            {
              title: "Archived",
              url: "#",
            },
          ],
        },
      ],
      navSecondary: [
        {
          title: "Settings",
          url: "#",
          icon: IconSettings,
        },
        {
          title: "Get Help",
          url: "#",
          icon: IconHelp,
        },
        {
          title: "Search",
          url: "#",
          icon: IconSearch,
        },
      ],
      documents: [
        {
          name: "Data Library",
          url: "#",
          icon: IconDatabase,
        },
        {
          name: "Reports",
          url: "#",
          icon: IconReport,
        },
        {
          name: "Word Assistant",
          url: "#",
          icon: IconFileWord,
        },
      ],
    }),
    [t]
  ); // Only recreate when translations change

  return (
    <Sidebar side={dir === "rtl" ? "right" : "left"} collapsible="offcanvas"  {...props}>
      <SidebarHeader className="ps-8">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5 mt-4">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-xl text-blue-800 font-extrabold">BanckDash.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
