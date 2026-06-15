import pool from "./connection.js";

export async function initDB() {
  await pool.query(`CREATE DATABASE IF NOT EXISTS github_analyzer`);

  await pool.query(` USE github_analyzer  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS github_profiles (
      id           INT AUTO_INCREMENT PRIMARY KEY,

      github_id    BIGINT UNIQUE NOT NULL,

      username     VARCHAR(100) UNIQUE NOT NULL,

      name         VARCHAR(255),

      bio          TEXT,

      followers    INT DEFAULT 0,

      following    INT DEFAULT 0,

      public_repos  INT DEFAULT 0,

      analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("Database and table ready");
}