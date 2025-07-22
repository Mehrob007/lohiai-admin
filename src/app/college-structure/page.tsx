"use client";
import SectionTable from "@/components/SectionTable";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormStore, useFunctions } from "../../hooks/useFormStore";

interface itemChildren {
  description: string;
  photo_id: string;
}

interface itemGetNews {
  [key: string]: string | number | Array<itemChildren>;
}

export default function CollegeStructure() {
  const router = useRouter();
  const { setDataMony } = useFormStore();
  const [data, setData] = useState<itemGetNews[] | null>();
  const { getItems } = useFunctions();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //   } else router.replace("/login");
  // }, [router]);
  const getData = async () => {
    const res = await getItems("college-structure/list");
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
              editOptions={{
                url: "/adding-college-structure",
                setData: setDataMony,
                getUrl: "college-structure/list",
              }}
              deleteOptions={{ url: "college-structure/delete", get: getData }}
              Items={data}
              headerTable={["", "Сарлавҳа"]}
              styleHeader={{ gridTemplateColumns: "100px 200px" }}
              styleItem={{ gridTemplateColumns: "100px 1fr 200px" }}
            />
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}
