import { create } from "zustand";

import type { Store } from "../types/types";


export const useStore = create<Store>((set, get) => ({
    message: '',
    timer: 0,
    isRunning: false,
    timerInterval: null,
    isGameOver: false,
    setMessage: (message: string) => set({ message }),
    clearMessage: () => set({ message: '' }),
    startTimer: () => {
        if (get().isRunning) return;
        const interval = setInterval(() => {
            set((state) => ({ timer: state.timer + 1 }));
        }, 1000);
        set({ isRunning: true, timerInterval: interval });
    },
    stopTimer: () => {
        const interval = get().timerInterval;
        if (interval) {
            clearInterval(interval);
        }
        set({ isRunning: false, timerInterval: null });
    },
    resetTimer: () => {
        const interval = get().timerInterval;
        if (interval) {
            clearInterval(interval);
        }
        set({ timer: 0, isRunning: false, timerInterval: null });
    },
    gameOver: () => {
        const interval = get().timerInterval;
        if (interval) clearInterval(interval);
        set({ isRunning: false, isGameOver: true });
    },
    resetGame: () => {
        set({
            timer: 0,
            isRunning: false,
            isGameOver: false,
            message: '',
        })
    }
}));