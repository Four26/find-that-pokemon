import { URL } from "./URL";

export const getLeaderBoard = async () => {
    try {
        const response = await fetch(`${URL}/getLeaderboard`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error('Failed to get leaderboard.');

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}