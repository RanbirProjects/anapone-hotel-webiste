# 🏝️ Anapnoe Resort Website

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=F75C7E&center=true&vCenter=true&width=700&lines=Luxury+Resort+Website;MERN+Stack+Hospitality+Platform;Modern+Booking+System;React+Node+MongoDB" />
</p>

<p align="center">
<img src="https://komarev.com/ghpvc/?username=RanbirProjects&label=Repository%20Views&color=blue&style=for-the-badge" />
</p>

<p align="center">
<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,js,html,css,git,github,vscode" />
</p>

---

# 🚀 Project Overview

**Anapnoe Resort Website** is a luxury hospitality platform built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The website provides a modern and elegant interface inspired by high-end resort websites where users can explore rooms, spa services, entertainment activities, and make bookings seamlessly.

It includes a fully responsive design, interactive booking system, and an admin dashboard to manage resort content and reservations.

---

# 🧠 Project Architecture

```mermaid
flowchart LR

User[User Browser] --> React[React Frontend]

React --> API[Node.js / Express Server]

API --> DB[(MongoDB Database)]
API --> Auth[JWT Authentication]

DB --> API
Auth --> API

API --> React
React --> User
```

---

# ✨ Features

- 🏨 Luxury resort style website design  
- 🎥 Full-screen video header  
- 📱 Fully responsive modern UI  
- 🛏️ Interactive room booking system  
- 🧘 Spa and wellness services pages  
- 🎭 Activities and entertainment section  
- 📸 Gallery showcase  
- 📩 Contact form with real-time validation  
- 🛠️ Admin dashboard for managing bookings and content  

---

# 📸 Application Screenshots

## 🏠 Welcome Page

<img src="https://github.com/user-attachments/assets/5fc761ff-ad8d-42be-bbaf-004e6eb117c3" width="900"/>

---

## 🛏️ Rooms

<img src="https://github.com/user-attachments/assets/ca877770-f6f6-4c53-bd99-eb3b5511bdd4" width="900"/>

---

## 🧘 Spa

<img src="https://github.com/user-attachments/assets/e975dc81-55ff-4889-b6e7-5309ec2857d5" width="900"/>

---

## 🎭 Activities and Entertainment

<img src="https://github.com/user-attachments/assets/ef42beef-4791-4c7b-9ab9-692cbe0de524" width="900"/>

---

## 📸 Gallery

<img src="https://github.com/user-attachments/assets/d1f980ee-f293-4fd5-ab3b-b05a2092627c" width="900"/>

---

## 📩 Contact Page

<img src="https://github.com/user-attachments/assets/b168990f-dd97-410d-90ce-cf71f71e00b9" width="900"/>

---

# 🏗️ Tech Stack

### Frontend
- React.js  
- Material UI  
- Framer Motion (Animations)  
- React Router  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  
- Multer (File Uploads)  

---

# 📂 Project Structure

```
anapnoe-resort/
│
├── client
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── context
│       └── utils
│
├── models
├── routes
├── middleware
├── config
└── server.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/anapnoe-resort.git
cd anapnoe-resort
```

---

## 2️⃣ Install Dependencies

```bash
npm install

cd client
npm install
```

---

## 3️⃣ Create `.env` File

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 4️⃣ Run the Application

```bash
npm run dev
```

Run backend only

```bash
npm run server
```

Run frontend only

```bash
npm run client
```

---

# 🚀 Deployment

## Backend Deployment (Render / Heroku)

```bash
heroku login
heroku create your-app-name
git push heroku main
```

Set environment variables:

```
MONGODB_URI
JWT_SECRET
```

---

## Frontend Deployment

Build command:

```
cd client && npm run build
```

Publish directory:

```
client/build
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Push to GitHub  
5. Open a Pull Request  

---

# 👨‍💻 Author

**Ranbir Singh**

💼 MERN Stack Developer  
📍 Bangalore, India  

📧 ranbirsingh9156@gmail.com  

🔗 GitHub  
https://github.com/RanbirProjects  

🔗 LinkedIn  
https://linkedin.com/in/ranbirsingh14  

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 🙏 Acknowledgments

- Design inspiration from luxury resort websites  
- Material UI component library  
- Framer Motion for smooth animations  
