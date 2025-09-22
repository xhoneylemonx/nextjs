import { create } from 'zustand';

export type PortfolioData = {
  name: string;
  surname: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  subjects: { name: string; grade: number }[];
  skills: string[];
  reason: string;
  targetFaculty: string;
  targetUniversity: string;
  transcriptLink?: string;
  evidenceLink?: string;
  image?: string;
};

type Store = {
  data: PortfolioData[];
  addData: (entry: PortfolioData) => void;
};

export const usePortfolioStore = create<Store>((set) => ({
  data: [],
  addData: (entry) =>
    set((state) => ({
      data: [...state.data, entry],
    })),
}));