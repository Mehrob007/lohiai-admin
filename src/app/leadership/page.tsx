"use client";
import SectionTable from "@/components/SectionTable";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFunctions } from "../../hooks/useFormStore";

interface itemChildrenNews {
  description: string;
  photo_id: string;
}

interface itemGetNews {
  main_title: string;
  main_photo_id: string;
  main_description: string;
  content?: itemChildrenNews[];
}

export default function Leadership() {
  const router = useRouter();
  const [data, setData] = useState<itemGetNews[] | null>();
  const { getItems } = useFunctions();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    } else router.replace("/login");
  }, [router]);
  const getData = async () => {
    const res = await getItems("leadership/list");
    if (res) {
      const data = res;
      // console.log("res", res.News);
      setData(data);
    } else {
      console.warn("res is null");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="news">
      <main>
        <div className="news-content">
          {data ? (
            <SectionTable
              Items={data}
              headerTable={["", "title"]}
              styleHeader={{ gridTemplateColumns: "100px 200px" }}
              styleItem={{ gridTemplateColumns: "100px 70%" }}
            />
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}
