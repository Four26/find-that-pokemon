import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { pool } from "../model/db";

export const addToLeaderBoard = expressAsyncHandler(async (req: Request, res: Response) => {
    const { name, time } = req.body;

    const insertPlayerTime = await pool.query('INSERT INTO players (name, time, created_at, updated_at) VALUES ($1, $2, $3, $4)', [name, time, new Date(), new Date()]);

    if (!insertPlayerTime) res.status(500).json('Failed to add to leaderboard.');
    const data = insertPlayerTime.rows[0];
    res.json({ message: 'Player added successfully!' });
});