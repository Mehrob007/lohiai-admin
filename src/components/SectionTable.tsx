import apiClient from "@/utils/apiClient";
// import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

interface itemChildren {
  description: string;
  photo_id: string;
}

export interface Item {
  [key: string]: string | number | Array<itemChildren>;
}
interface styles {
  [key: string]: string;
}
// interface ApiResponse {
//   data: Item[] | null;
//   hasMore: boolean;
//   next_id: number;
// }
interface sectionTable {
  styleHeader?: styles;
  styleItem?: styles;
  Items: Item[] | undefined;
  headerTable: string[] | undefined;
  editOptions?: { url: string; getUrl: string; setData: (item: Item) => void };
  deleteOptions?: { url: string; get: () => Promise<void> };
}

export default function SectionTable({
  Items,
  styleHeader,
  styleItem,
  headerTable,
  editOptions,
  deleteOptions,
}: sectionTable) {
  const deleteItem = async (
    url: string,
    get: () => Promise<void>,
    id: string,
  ) => {
    try {
      const res = apiClient.delete(`${url}?id=${id}`);
      console.log("res deleted items", res);
      setTimeout(() => get(), 100);
    } catch (e) {
      console.error(e);
    }
  };
  const editItem = (
    id: string,
    // getUrl: string
  ) => {
    if (editOptions?.url) {
      redirect(`${editOptions.url}/${id}`);
    }
  };
  console.log("Items", Items);

  return (
    <div className="section-table">
      <div className="section-table-header" style={styleHeader}>
        {Array.isArray(headerTable) &&
          headerTable.map((e, i) => <div key={i}>{e}</div>)}
      </div>
      <div className="section-table-content">
        {Array.isArray(Items) &&
          Items?.map((item, i) => (
            <div key={i} style={styleItem}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.main_photo_id}`}
                alt="img"
                width={100}
                height={100}
              />
              <div>
                <h1>{item.main_title as string}</h1>
                <p>{item.main_description as string}</p>
              </div>
              <div>
                {editOptions?.url && (
                  <button
                    onClick={() => {
                      editItem(
                        item?._id as string,
                        // editOptions?.getUrl as string,
                      );
                      redirect(editOptions.url);
                    }}
                  >
                    Тағйир
                  </button>
                )}
                {deleteOptions?.url && (
                  <button
                    onClick={() =>
                      deleteItem(
                        deleteOptions.url,
                        deleteOptions.get,
                        (item._id as string) || "",
                      )
                    }
                  >
                    Нест кардан
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
