"use client";
import { useGlobalState } from "@/stors/globalState";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface conteiner {
  children: React.ReactNode;
}

export default function Conteiner({ children }: conteiner) {
  const pathName = usePathname();
  const { headerContent } = useGlobalState((state) => state);
  console.log("pathName", pathName.split("-")[0] === "/adding" ? headerContent.backPath : headerContent.addPath);

  return (
    <div className="components">
      <div className="components-header">
        <h1>{headerContent.title}</h1>
        <button>
          <Link
            href={pathName.split("-")[0] === "/adding" ? headerContent.backPath : headerContent.addPath}
          >
            {pathName.split("-")[0] === "/adding"
              ? "Назад"
              : "Добавить"}
          </Link>
        </button>
      </div>
      {children}
    </div>
  );
}
