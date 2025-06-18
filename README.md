# 🕒 Chrome Time Tracker

## 🧑‍💻 Author
- COMPANY : CODTECH IT SOLUTIONS
- NAME : SUKHDEV
- INTERN ID : CT08DL212
- DOMAIN : FULL STACK WEB DEVELOPMENT
- BATCH DURATION : April 30th,2025 TO June 30th,2025
- MENTOR NAME : Vaishali Shrivastava

A full-stack project that tracks time spent on browser tabs using a Chrome Extension, stores it in a Node.js + MongoDB backend, and displays logs in a dashboard.


## 📁 Project Structure
```pgsql
chrome-time-tracker/
├── extension/          ← Chrome extension files
│   ├── manifest.json
│   └── background.js
├── server/             ← Node.js backend
│   ├── index.js
│   ├── dashboard.html  ← Web dashboard
│   └── models/
│       └── TimeLog.js
```

## 🚀 Features
- ⌛ Automatically tracks active tab time
- 📤 Sends data to local server
- 💾 Stores logs in MongoDB
- 📊 Dashboard at http://localhost:5000/logs to view logs

## 🧰 Technologies
- Chrome Extension API
- Node.js + Express
- MongoDB + Mongoose
- HTML/CSS Dashboard

## 📦 Installation
### 🧩 1. Install MongoDB
 Download from: https://www.mongodb.com/try/download/community
 Or install via terminal:
```bash
# Ubuntu
sudo apt install mongodb

# macOS
brew tap mongodb/brew
brew install mongodb-community
```

Start it with:
```bash
mongod
```

### 🧪 2. Setup Backend
```bash
cd chrome-time-tracker/server
npm install
node index.js
```
It runs at: http://localhost:5000



### 🧱 3. Load Chrome Extension
- Open Chrome → go to chrome://extensions/
- Enable Developer Mode
- Click Load unpacked
- Select chrome-time-tracker/extension folder


### 📊 4. View Dashboard
After using the extension for a few seconds...

Go to:
👉 http://localhost:5000/logs
To see your tracked time in a table!



## 📂 API
POST /log
Logs time for a URL:
```json
{
  "url": "https://youtube.com",
  "duration": 12000,
  "date": "2025-06-16T10:00:00Z"
}
```

GET /api/logs
Returns all logs:
```json
[
  {
    "url": "https://example.com",
    "duration": 15000,
    "date": "2025-06-16T11:00:00Z"
  }
]
```


## 🧹 How to Stop It
- Close MongoDB terminal (Ctrl + C)
- Stop Node server (Ctrl + C)
- Disable the Chrome Extension


## 📝 License
Free to use and modify for learning purposes.
Created for internship practice 🚀

