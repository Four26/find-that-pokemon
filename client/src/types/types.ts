export type Pokemon = {
    x: number;
    y: number;
    visible: boolean
}

export type ClosestPokemon = {
    name: string | null;
    distance: number;
    x?: number;
    y?: number;
    id?: number;
    image?: string;
}

export type LeaderboardData = {
    id: number;
    name: string;
    time: number;
    created_at: Date;
    updated_at: Date;
}

export type Store = {
    message: string;
    timer: number,
    isRunning: boolean,
    isGameOver: boolean;
    timerInterval: NodeJS.Timeout | null;
    setMessage: (message: string) => void;
    clearMessage: () => void;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void;
    gameOver: () => void;
    resetGame: () => void;
}