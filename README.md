#  GitHub Profile Analyzer API

##  Project Overview

This backend service fetches GitHub user profiles using the GitHub Public API, analyzes useful profile insights, and stores them in a MySQL database for future retrieval.

## Tech Stack

* Node.js
* Express.js
* MySQL (hosted on railway)
* Axios
* GitHub Public API

##  Features

* Fetch GitHub user profiles
* Store profile data in MySQL
* Prevent duplicate entries
* Retrieve all analyzed profiles
* Get profile by username
* RESTful API architecture
* Error handling and validation

## Live API

https://github-profile-analyzer-api-aeds.onrender.com

##  Setup Instructions

### 1. Clone Repository

git clone https://github.com/AbhishekYadav44/Github-Profile-Analyzer-Api.git
cd Github-Profile-Analyzer-Api
cd src


### 2. Install Dependencies


npm install


### 3. Configure Environment Variables

Create a `.env` file:

DB_HOST=hostname
DB_USER=root
DB_PASSWORD=your password
DB_NAME=github_analyzer
DB_PORT=your-db-port



### 4. Run the Server
npm run dev

### Get All Analyzed Profiles
GET /api/profile

Example : 
https://github-profile-analyzer-api-aeds.onrender.com/api/profiles


### Get Profile By Username
GET /api/profile/:username

Example:
GET https://github-profile-analyzer-api-aeds.onrender.com/api/profiles/AbhishekYadav44

### Analyze and Store a GitHub Profile
POST /api/profile/analyze/:username

Example:
POST  https://github-profile-analyzer-api-aeds.onrender.com/api/profiles/analyze/AbhishekYadav44

## sample response

{
    "success":true,
    "data": {
               "id":1,
               "github_id":180807404,
               "username":"AbhishekYadav44",
               "name":"Abhishek yadav",
               "bio":null,
               "followers":1,
               "following":1,
               "public_repos":28,
               "analyzed_at":"2026-06-15T21:11:24.000Z"
            }
}

##  Author

Abhishek Yadav
