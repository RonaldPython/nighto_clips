import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandDiscord,
  IconBrandX,
  IconBrandTelegram,
} from "@tabler/icons-react";

export function FloatingDockDisplay({ items }: { items: { title: string; icon: JSX.Element; href: string }[] }) {
  return (
    <FloatingDock
      mobileClassName="translate-y-20"
      items={items.map(item => ({
        title: item.title,
        icon: item.icon,
        href: item.href
      }))}
    />
  );
}
