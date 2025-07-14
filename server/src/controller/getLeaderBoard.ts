import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { pool } from "../model/db";

export const getLeaderBoard = expressAsyncHandler(async (req: Request, res: Response) => {
    const response = await pool.query('SELECT * FROM players ORDER BY time asc LIMIT 10');
    const data = response.rows;

    res.json({ data, message: 'Leaderboard fetched successfully!' });
});