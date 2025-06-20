import apiClient from "@/utils/apiClient";
import { create } from "zustand";

interface contentItem {
  description: string;
  photo_id: string;
}

interface FormState {
  data: { [key: string]: string | number | Array<contentItem> };
  errors: { [key: string]: string };
  setData: (field: string, value: string | number | Array<contentItem>) => void;
  setDataMony: (data: {
    [key: string]: string | number | Array<contentItem>;
  }) => void;
  validate: (rules: ValidationRules) => boolean;
  resetErrors: () => void;
  setClear: () => void;
}

type ValidationRules = {
  [key: string]: {
    required?: boolean;
    minLength?: number; // string
    maxLength?: number;
    min?: number; // number
    max?: number;
    pattern?: RegExp;
    message?: string;
  };
};

export const useFormStore = create<FormState>((set, get) => ({
  data: {},
  errors: {},

  setData: (field, value) =>
    set((state) => ({
      data: { ...state.data, [field]: value },
    })),
  setClear: () =>
    set(() => ({
      data: {},
    })),
  setDataMony: (data) =>
    set(() => ({
      data: data,
    })),

  resetErrors: () => set({ errors: {} }),

  validate: (rules: ValidationRules) => {
    const { data } = get();
    const errors: { [key: string]: string } = {};

    Object.keys(rules).forEach((field) => {
      const rule = rules[field];
      const value = data[field];

      if (
        rule.required &&
        (value === "" || value === undefined || value === null)
      ) {
        errors[field] = rule.message || " Ин ҷои ҳатмист";
        return;
      }

      if (typeof value === "string") {
        if (rule.minLength && value.length < rule.minLength) {
          errors[field] =
            rule.message || `Камтар аз ${rule.minLength} аломат набояд бошад`;
          return;
        }
        if (rule.maxLength && value.length > rule.maxLength) {
          errors[field] =
            rule.message || `Аз ${rule.maxLength} аломат зиёд набояд бошад`;
          return;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errors[field] = rule.message || "Формати нодуруст";
          return;
        }
      }

      if (typeof value === "number") {
        if (rule.min !== undefined && value < rule.min) {
          errors[field] = rule.message || `Аниқати камтарин: ${rule.min}`;
          return;
        }
        if (rule.max !== undefined && value > rule.max) {
          errors[field] = rule.message || `Аниқати бештарин: ${rule.max}`;
          return;
        }
      }
    });

    set({ errors });
    return Object.keys(errors).length === 0;
  },
}));

interface itemChildren {
  description: string;
  photo_id: string;
}

interface itemGetNews {
  [key: string]: string | number | Array<itemChildren>;
}
// interface getNews {
//   news: itemGetNews[];
// }

export const useFunctions = create(() => ({
  getItems: async (url: string, id?: string): Promise<itemGetNews[] | null> => {
    try {
      const res = await apiClient.get(`${url}${id ? `/${id}` : ""}`);
      return res.data;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
}));
