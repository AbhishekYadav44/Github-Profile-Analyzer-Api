import express from 'express'
import axios from 'axios';
const app =express();
import pool from "./db/connection.js";
import { initDB } from './db/initDb.js';
import profileRoutes from './routes/profileRoutes.js'

// const res = await axios.get("https://api.github.com/users/AbhishekYadav44")
// console.log(res.data)

// const [rows] = await pool.query("SELECT 1");

async function main() {
        await initDB();
}
main().then(()=>{
    console.log('connection made succesfully')
}).catch((e)=>{
    console.log(e)
})
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GitHub Profile Analyzer API is running successfully.",
    endpoints: {
      getAllProfiles: "/api/profile",
      getProfileByUsername: "/api/profile/:username",
      analyzeProfile: "POST /api/profile/analyze/:username"
    }
  });
});

app.use("/api/profiles", profileRoutes)

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})