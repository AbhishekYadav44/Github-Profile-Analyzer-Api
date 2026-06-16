import express from 'express';

import axios from "axios";
import pool from '../db/connection.js';

export const analyzeProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const [existing] = await pool.query(
            "SELECT * FROM github_profiles WHERE username = ?",
            [username]
        );

        if (existing.length > 0) {
            return res.json({
                success: true,
                message: "Fetched from database Already Analyzed",
                data: existing[0],
            });
        }


        const response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;
        console.log(data)


        const profile = {

            github_id: data.id,
            username: data.login,
            name: data.name,

            bio: data.bio,

            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos

        };


        await pool.query(
            `INSERT INTO github_profiles 
    (github_id, username, name, bio, followers, following, public_repos)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                profile.github_id,
                profile.username,
                profile.name,
                profile.bio,
                profile.followers,
                profile.following,
                profile.public_repos
            ]
        );


        res.status(201).json({
            success: true,
            message: "Profile analyzed and saved",
            data: profile
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getProfileByUsername = async (req, res) => {
    try {
        const { username } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM github_profiles WHERE username = ?",
            [username]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        res.status(200).json({
            success: true,
            data: rows[0]
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



export const getAllProfiles = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM github_profiles");

        res.status(200).json({
            success: true,
            message: "All profiles fetched successfully",
            data: rows
        });
       
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


