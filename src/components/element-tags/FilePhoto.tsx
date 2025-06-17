import { useFormStore } from "@/hooks/useFormStore";
import apiClient from "@/utils/apiClient";
import Image from "next/image";
import React from "react";

interface FilePhotoProps {
  id: string;
  keyData: string;
  title: string;
  value: string;
  error: { [key: string]: string | undefined };
  width?: number;
  height?: number;
  className?: string;
  index?: number;
  childrenKey?: string;
}
interface contentItem {
  description: string;
  photo_id: string;
}
export default function FilePhoto({
  id,
  title,
  value,
  error,
  width,
  height,
  className,
  index,
  childrenKey,
  keyData,
}: FilePhotoProps) {

  const { setData, data } = useFormStore();

  const sendPhoto = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    e.target.value = "";

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await apiClient.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(key, res.data.id);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const sendPhotoChildren = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    index?: number,
    childrenKey?: string,
  ) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    const res = await apiClient.post("/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (childrenKey) {
      const updatedContent: contentItem[] = Array.isArray(data.content)
        ? [...data.content]
        : [];
      if (updatedContent[index as number]) {
        updatedContent[index as number][childrenKey as keyof contentItem] =
          res.data.id;
      }
      setData(key, updatedContent);
    } else {
      setData(key, res.data.id);
    }
  };

  return (
    <div
      className={`file-photo ${className}`}
      style={{ width: width || "100%" }}
    >
      <label
        htmlFor={id}
        onClick={() => {
          if (value) {
            if (index === 0 || index) {
              const updatedContent: contentItem[] = Array.isArray(data.content)
                ? [...data.content]
                : [];
              if (updatedContent[index as number]) {
                updatedContent[index as number][
                  childrenKey as keyof contentItem
                ] = "";
              }
              setData(keyData || id, updatedContent);
            } else {
              setData(keyData || id, "");
            }
          }
        }}
      >
        {!value ? title : "Удалить фото"}
      </label>
      <input
        type="file"
        id={id}
        onChange={(e) => {
          console.log("index", index);

          if (index === 0 || index) {
            sendPhotoChildren(e, keyData || id, index, childrenKey);
          } else {
            sendPhoto(e, keyData || id);
          }
        }}
      />
      {value && (
        <Image
          src={
            typeof value === "string"
              ? process.env.NEXT_PUBLIC_API_URL + "files/" + value
              : value
          }
          alt={id}
          width={width || 300}
          height={height || 300}
        />
      )}
      <p className="error" style={{ opacity: error?.[id] ? 1 : 0 }}>
        {error?.[keyData || id]}
      </p>
    </div>
  );
}
