# 🔐 Passkey – Your Own Password Manager

Passkey is a modern, secure, and responsive password manager built with the **MERN stack**. It allows users to store, view, and delete passwords safely using a MongoDB backend, Express server, and React frontend.

![Passkey Screenshot](./screenshot.png)

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Others:** dotenv, cors, body-parser , React-Toast 

---

## 🚀 Features

- 🔐 Save passwords securely  
- 📜 View all saved passwords  
- 🗑️ Delete unwanted credentials  
- 🌐 API-based architecture  
- 🎨 Clean and responsive UI  

---

## 📁 Project Structure

Password-Mongo/ ├── backend/ │ ├── server.js │ └── .env ├── frontend/ │ ├── src/ │ │ ├── App.jsx │ │ ├── components/ │ │ │ ├── Navbar.jsx │ │ │ └── Footer.jsx │ │ └── ... │ └── public/ └── README.md

Password-Local/ ├── src/ │ │ ├── App.jsx │ │ ├── components/ │ │ │ ├── Navbar.jsx │ │ │ └── Footer.jsx │ │ └── ... │ └── public/ └── README.md

---
## 🌐 API Endpoints

| Method | Endpoint | Description         |
|--------|----------|---------------------|
| GET    | `/`      | Fetch all passwords |
| POST   | `/`      | Save a new password |
| DELETE | `/`      | Delete a password   |


