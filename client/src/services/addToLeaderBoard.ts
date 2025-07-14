import { URL } from "./URL";

export const addToLeaderBoard = async ({ name, time }: { name: string, time: number }) => {
    try {
        console.log(name, time);
        const response = await fetch(`${URL}/leaderboard`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, time })
        });

        if (!response.ok) throw new Error('Failed to add to leaderboard.');

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}