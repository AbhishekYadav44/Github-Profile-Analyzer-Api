import express from "express";
import {
  analyzeProfile,
  getAllProfiles,
  getProfileByUsername
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/", getAllProfiles);
router.get("/:username", getProfileByUsername);
router.post("/analyze/:username", analyzeProfile);

export default router;