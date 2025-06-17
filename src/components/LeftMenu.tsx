"use client";
import { useGlobalState } from "@/stors/globalState";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menu = [
  {
    title: "Хабар",
    href: ["/", "/adding-news"],
  },
  // {
  //   title: "Дар бораи Академия",
  //   href: ["/academy", "/adding-academy"],
  // },
  {
    title: "Рохбарият",
    href: ["/leadership", "/adding-leadership"],
  },
  {
    title: "Таърихи Коллечи милитсия",
    href: ["/college-history", "/adding-college-history"],
  },
  {
    title: "Сохтори Коллеч",
    href: ["/college-structure", "/adding-college-structure"],
  },
  {
    title: "Курссанти бехтари",
    href: ["/cadets", "/adding-cadets"],
  },
  {
    title: "Баромадхо",
    href: ["/outputs", "/adding-outputs"],
  },
  {
    title: "Наќшахои таълими ва нашрияхо",
    href: ["/educational-plans", "/adding-educational-plans"],
  },
  {
    title: "Шурои илми-педагоги",
    href: ["/pedagogical-council", "/adding-pedagogical-council"],
  },
  {
    title: "Санадҳо",
    href: ["/acts", "/adding-acts"],
  },
];

export default function LeftMenu() {
  const pathName = usePathname();
  const { setHeaderContent } = useGlobalState((state) => state);

  return (
    <div className="left-menu">
      <ul className="nav-bar">
        {menu.map((e, i) => {
          const isActive = e.href.includes(pathName);
          return (
            <li
              key={i}
              onClick={() =>
                setHeaderContent({
                  backPath: e.href[0],
                  addPath: e.href[1],
                  title: e.title,
                })
              }
              className={`${isActive ? "active-link" : ""} `}
            >
              <Link href={e.href[0]}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
