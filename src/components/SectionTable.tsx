import Image from "next/image";
import React from "react";

interface itemChildrenNews {
  description: string;
  photo_id: string;
}

export interface Item {
  main_title: string;
  main_photo_id: string;
  main_description: string;
  content?: itemChildrenNews[];
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
}

export default function SectionTable({
  Items,
  styleHeader,
  styleItem,
  headerTable,
}: sectionTable) {
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
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}files/${item.main_photo_id}`}
                alt="img"
                width={100}
                height={100}
              />
              <div>
                <h1>{item.main_title}</h1>
                <p>{item.main_description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
