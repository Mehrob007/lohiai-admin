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

export default function Outputs() {
  const router = useRouter();
  const [data, setData] = useState<itemGetNews[] | null>();
  const { getItems } = useFunctions();
  const { setDataMony } = useFormStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    } else router.replace("/login");
  }, [router]);
  const getData = async () => {
    const res = await getItems("outputs/list");
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
                url: "/adding-outputs",
                setData: setDataMony,
                getUrl: "outputs/list",
              }}
              deleteOptions={{ url: "outputs/delete", get: getData }}
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
