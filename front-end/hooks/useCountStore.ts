// useCountStore.js
import create from "zustand";

const useCountStore = create((set) => ({
  count: 0,
  setCount: (newCount: number) => set({ count: newCount }),
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state: { count: number }) => ({ count: state.count - 1 })),
}));
export default useCountStore;
