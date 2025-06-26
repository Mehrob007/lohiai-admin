"use client";
import FilePhoto from "@/components/element-tags/FilePhoto";
import Input from "@/components/element-tags/Input";
import Textarea from "@/components/element-tags/Textarea";
import { useFormStore } from "@/hooks/useFormStore";
import apiClient from "@/utils/apiClient";
import React, { useEffect } from "react";
interface contentItem {
  description: string;
  photo_id: string;
}

export default function AddingCadets({ editProps }: { editProps?: boolean }) {
  const { data, errors, setData, validate } = useFormStore();
  const [edit, setEdit] = React.useState(false);

  const onSend = async () => {
    const isValid = validate({
      main_title: { required: true },
      main_photo_id: { required: true },
    });
    if (isValid) {
      try {
        const res = await apiClient.post("/cadets/add", {
          main_title: data.main_title,
          main_photo_id: data.main_photo_id,
          content: data.content || [
            {
              description: "",
              photo_id: "",
            },
          ],
        });
        console.log("res", res.data);
        setTimeout(() => {
          setData("main_title", "");
          setData("main_photo_id", "");
        }, 100);
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
    setEdit(editProps || false);
  }, []);

  console.log("data", data);

  return (
    <div className="adding">
      <div className="adding-content">
        <div className="main-form">
          <div className="adding-header">
            <h1>Добавление</h1>
            <button onClick={onSend}>Добавить</button>
          </div>
          <div className="adding-form">
            {/* <input
                type="text"
                placeholder="Заголовок"
                value={(data?.main_title as string) || ""}
                onChange={(e) => setData("main_title", e.target.value)}
              />
              {errors.main_title && (
                <span className="error">{errors.main_title}</span>
              )} */}
            <Input
              required={true}
              title="Заголовок"
              type="text"
              placeholder="Заголовок"
              id="main_title"
              value={(data?.main_title as string) || ""}
              onChange={(e) => setData("main_title", e)}
              error={errors}
            />
            {/* <input
                type="file"
                placeholder="ID фотографии"
                // value={(data?.main_photo_id as string) || ""}
                onChange={(e) => sendPhoto(e, "main_photo_id")}
              />
              {errors.main_photo_id && (
                <span className="error">{errors.main_photo_id}</span>
              )} */}

            <FilePhoto
              keyData="main_photo_id"
              id="main_photo_id_label"
              title="Загрузить фото"
              value={data?.main_photo_id as string}
              error={errors}
              // width={200}
            />
          </div>
        </div>
        <div className="adding-form-content">
          {Array.isArray(data?.content) &&
            data?.content?.map((item, index) => (
              <div key={index} className="adding-form-item">
                <Textarea
                  title="Описание"
                  id="description"
                  placeholder="Описание"
                  value={item.description}
                  error={errors}
                  required={true}
                  onChange={(e) => {
                    const updatedContent: contentItem[] = Array.isArray(
                      data.content,
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

                <FilePhoto
                  keyData="content"
                  id={`content-${index}`}
                  index={index}
                  childrenKey="photo_id"
                  title="Загрузить фото"
                  value={item?.photo_id as string}
                  error={errors}
                />
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
            Добавить элемент
          </button>
        </div>
      </div>
    </div>
  );
}
