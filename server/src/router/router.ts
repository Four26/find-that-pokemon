import express from "express";
import { addToLeaderBoard } from "../controller/addToLeaderBoard";
import { getLeaderBoard } from "../controller/getLeaderBoard";

const router = express.Router();

router.get('/getLeaderboard', getLeaderBoard);
router.post('/leaderboard', addToLeaderBoard);

export default router;