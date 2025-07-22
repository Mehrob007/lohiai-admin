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
  {
    title: "Роҳбарият",
    href: ["/leadership", "/adding-leadership"],
  },
  {
    title: "Таърихи Коллеҷи милитсия",
    href: ["/college-history", "/adding-college-history"],
  },
  {
    title: "Сохтори Коллеҷ",
    href: ["/college-structure", "/adding-college-structure"],
  },
  {
    title: "Курсанти беҳтарин",
    href: ["/cadets", "/adding-cadets"],
  },
  {
    title: "Баромадҳо",
    href: ["/outputs", "/adding-outputs"],
  },
  {
    title: "Нақшаҳои таълимӣ ва нашрияҳо",
    href: ["/educational-plans", "/adding-educational-plans"],
  },
  {
    title: "Шӯрои илмию педагогӣ",
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

  const quit = () => {
    localStorage.removeItem("token");
    document.location.href = "/login";
  };

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
      <button onClick={quit}>Баромадан</button>
    </div>
  );
}
