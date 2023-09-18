import { create } from "zustand";

type State = {
  open: boolean;
  selected: number;
  onPressedToggleSidebar: (value?: boolean | null) => void;
  onPressedSetSelected: (value: number) => void;
};

export const useSidebar = create<State>((set) => ({
  open: false,
  selected: 0,
  onPressedSetSelected: (value: number) =>
    set((state) => ({ ...state, selected: value })),
  onPressedToggleSidebar: (value = null) =>
    set((state) => ({ open: value === null ? !state.open : value })),
}));
