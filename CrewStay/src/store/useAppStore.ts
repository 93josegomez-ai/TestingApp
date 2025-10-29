import { create } from 'zustand';

export type AppState = {
  appTitle: string;
  setAppTitle: (title: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  appTitle: 'Welcome to CrewStay',
  setAppTitle: (title) => set({ appTitle: title }),
}));
