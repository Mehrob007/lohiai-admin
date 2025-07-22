"use client";
import FilePhoto from "@/components/element-tags/FilePhoto";
import Input from "@/components/element-tags/Input";
import Textarea from "@/components/element-tags/Textarea";
import { useFormStore } from "@/hooks/useFormStore";
import apiClient from "@/utils/apiClient";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
interface contentItem {
  description: string;
  photo_id: string;
}

export default function AddingCollegeStructure() {
  const { data, errors, setData, validate } = useFormStore();
  const [edit] = React.useState({});
  const { id } = useParams();

  const getDataForEdit = async () => {
    try {
      const res = await apiClient("college-structure/list?id=" + id);
      setData("_id", id as string);
      Object.entries(res.data).map(([key, value]) =>
        setData(key, value as string)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onSend = async () => {
    const isValid = validate({
      main_title: { required: true },
      main_photo_id: { required: true },
    });
    if (isValid) {
      try {
        await apiClient.post("/college-structure/add", data).then(() => {
          setData("main_title", "");
          setData("main_photo_id", "");
          setData("content", [{ description: "", photo_id: "" }]);
        });
      } catch (e) {
        console.error("Error sending data:", e);
      }
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  useEffect(() => {
    if (edit) return;
  }, [edit]);

  useEffect(() => {
    getDataForEdit();
  }, []);

  console.log("id", id);

  return (
    <div className="adding">
      <div className="adding-content">
        <div className="main-form">
          <div className="adding-header">
            <h1>Илова</h1>
            <button onClick={onSend}>Фиристодан</button>
          </div>
          <div className="adding-form">
            <Input
              required={true}
              title=" Сарлавҳа"
              type="text"
              placeholder=" Сарлавҳа"
              id="main_title"
              value={(data?.main_title as string) || ""}
              onChange={(e) => setData("main_title", e)}
              error={errors}
            />
            <FilePhoto
              keyData="main_photo_id"
              id="main_photo_id_label"
              title="Аксро бор кардан"
              value={data?.main_photo_id as string}
              error={errors}
              // width={200}
            />
          </div>
        </div>
        <div className="adding-form-content">
          {Array.isArray(data?.content) &&
            data?.content?.map((item, index, arr) => (
              <div key={index} className="adding-form-item">
                <Textarea
                  title="Тавсиф"
                  id="description"
                  placeholder="Тавсиф"
                  value={item.description}
                  error={errors}
                  required={true}
                  onChange={(e) => {
                    const updatedContent: contentItem[] = Array.isArray(
                      data.content
                    )
                      ? [...data.content]
                      : [];
                    if (updatedContent[index]) {
                      updatedContent[index].description = e;
                      setData("content", updatedContent);
                    }
                  }}
                />
                {/* <input
                    type="file"
                    placeholder="ID фотографии"
                    onChange={(e) =>
                      sendPhotoChildren(e, `content`, index, "photo_id")
                    }
                  /> */}

                <div>
                  <FilePhoto
                    keyData="content"
                    id={`content-${index}`}
                    index={index}
                    childrenKey="photo_id"
                    title="Аксро бор кардан"
                    value={item?.photo_id as string}
                    error={errors}
                  />
                  {index !== 0 && (
                    <button
                      onClick={() => {
                        setData(
                          "content",
                          arr.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}

          <button
            onClick={() => {
              const updatedContent: contentItem[] = Array.isArray(data.content)
                ? [...data.content]
                : [];
              updatedContent.push({ description: "", photo_id: "" });
              setData("content", updatedContent);
            }}
          >
            Илова кардани унсур
          </button>
        </div>
      </div>
    </div>
  );
}
