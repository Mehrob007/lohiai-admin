"use client"
import { create } from "zustand";

interface HeaderContent {
  backPath: string;
  addPath: string;
  title: string;
}

interface GlobalState {
  headerContent: HeaderContent;
  setHeaderContent: (content: HeaderContent) => void;
}

const LOCAL_STORAGE_KEY = "headerContent";

const getInitialHeaderContent = (): HeaderContent => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : { backPath: "", addPath: "", title: "" };
    } catch {
      return { backPath: "", addPath: "", title: "" };
    }
  }
  return { backPath: "", addPath: "", title: "" }; // SSR fallback
};


export const useGlobalState = create<GlobalState>((set) => ({
  headerContent: getInitialHeaderContent(),
  setHeaderContent: (content: HeaderContent) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(content));
    set({ headerContent: content });
  },
}));
